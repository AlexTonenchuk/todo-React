import React from "react";
import "./item-status-filter.css"

export default function ItemStatusFilter ({onFilter, selectedfilter}){
        
    return (
        <div className="itemStatusFilter"
            onClick={onFilter}>
            <button 
                value='all' 
                className={selectedfilter==='all'?'pressed':''}>
                All
            </button>
            <button 
                value='active'
                className={selectedfilter==='active'?'pressed':''}>
                Active
            </button>
            <button 
                value='completed'
                className={selectedfilter==='completed'?'pressed':''}>
                Completed
            </button>
        </div>
    );
};