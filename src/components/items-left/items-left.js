import React from "react";
import './items-left.css';

export default function ItemsLeft ({itemsLeft}){
    return (
        <span className="itemsLeft" >
            {itemsLeft + ' items not fulfilled'}
        </span>
    );
};



