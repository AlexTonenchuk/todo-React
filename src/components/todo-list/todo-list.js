import React from "react";
import './todo-list.css';
import TodoListItem from "../todo-list-item/todo-lst-item";

export default function TodoList ({items, togleDone}) {

    const elements = items.map(
        (item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} >
                    <TodoListItem 
                        togleDone={()=>togleDone(id)}
                        {...itemProps}
                    />
                </li>
            );
        }
    );

    return (<ul> {elements} </ul>);

};

