import React from "react";
import "./clear-completed.css";

export default function ClearCompleted ({onClick}){
    return(
        <button
            onClick={onClick}>
            Clear completed
        </button>
    );
}
