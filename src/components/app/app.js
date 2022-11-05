import React , { useState } from "react";
import ItemAddForm from "../item-add-form/item-add-form";
import TodoList from "../todo-list/todo-list";
import AppFooter from "../app-footer/app-footer";

import "./app.css";

export default function App (){

    //states:

    const [items, setItems] = useState(                        
        [
            { id: 1, label: 'Pay for Internet services', done: false },
            { id: 2, label: 'Learn a new English word', done: false },
            { id: 3, label: 'Make a report', done: false },
        ]
    );

    const [filter, setFilter] = useState('all');

    const [idAddedItem, setIdAddedItem] = useState(100);
    
    //handlers:

    const onTogleDone=(id)=>{
        const index = items.findIndex((item) => item.id === id);
        setItems((items)=>{
            const newItems=[...items];
            newItems[index].done=!newItems[index].done;
            return newItems;
        });
    };

    const onFilter=(e)=>{
        setFilter((filter)=>{
            const selectedFilter=e.target.value;
            return selectedFilter;
        });
    }

    const onAddItem=(inputValue)=>{
        setItems((items)=>{
            const newArray=[...items, {id: idAddedItem,
                                       label: inputValue,
                                       done: false,  
                                      }
            ];
            setIdAddedItem((idAddedItem)=>++idAddedItem)
            return newArray;
        });
    };

    const onClick=()=>{
        setItems((items)=>{
            const newArray=items.filter((item)=>item.done===false);
            return newArray;
        })
    };

    // computed data:
    
    const calculateItemsLeft =(items)=>{
        const arrayItemsLeft=items.filter((item) =>!item.done)
        const itemsLeft=arrayItemsLeft.length;
        return itemsLeft;
    }

    const filterItems=(items, filter)=>{
        let filteredArray = items;
        switch (filter) {
            case 'all':
                filteredArray = items;
                break;
            case 'active':
                filteredArray = items.filter((item)=>item.done===false);
                break;
            case 'completed':
                filteredArray = items.filter((item)=>item.done===true);
                break;
            default:
                alert ('erorr in filret/switch')
        };
        return filteredArray;
    }

  
    return (
        <div className='app'>
            <div className="appHeader" >
                TODO LIST
            </div>
            <div className='appWrap'>
                <ItemAddForm
                    onAddItem={onAddItem}
                />
                <TodoList  
                    items={filterItems(items, filter)} 
                    togleDone={onTogleDone}
                />
                <AppFooter 
                    itemsLeft={calculateItemsLeft(items)}
                    selectedfilter={filter}
                    onFilter={onFilter}
                    onClick={onClick}
                />
            </div>
        </div>
    )
};