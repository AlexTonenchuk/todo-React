import React from "react";
import "./app-footer.css";
import ItemsLeft from "../items-left/items-left";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ClearCompleted from "../clear-completed/clear-completed";

export default function AppFooter({itemsLeft, onFilter, selectedfilter, onClick}){
    return (
        <div className='appFooter'>
            <ItemsLeft 
                itemsLeft={itemsLeft} 
            />
            <ItemStatusFilter 
                onFilter={onFilter} 
                selectedfilter={selectedfilter} 
            />
            <ClearCompleted
                onClick={onClick}
            />
        </div>
    )
};




