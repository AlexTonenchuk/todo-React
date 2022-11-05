import React, {useState}  from "react";
import './item-add-form.css';

export default function ItemAddForm ({onAddItem}){
    
    const [inputValue, setInputValue] = useState ('');

    const onChange=(e)=>{
        setInputValue(()=>{return e.target.value})
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        onAddItem(inputValue);
        setInputValue('')
    };

    return (
        <form className="itemAddForm"
            onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Input: what needs to be done?"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    );
};