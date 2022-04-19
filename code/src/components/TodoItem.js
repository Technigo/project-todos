import React, { useState } from 'react'

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props; 

    const inputTodo = useState(true);

    const changeFocus = () => {

        inputTodo.current.disabled = false;
        inputTodo.current.focus();
    };

    return (
        <li key={item.id} className="card">
            <textarea 
                ref={inputTodo} 
                disabled={inputTodo}
                defaultValue={item.item}
                
            /> 
        <div className="btns">
        <button 
        style={{color: "green"}}
        onClick={() => completeTodo(item.id)}>Complete</button>
        <button 
        style={{color: "red"}}
        onClick={() => removeTodo(item.id)}>Delete</button> 
        </div>
        {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;

