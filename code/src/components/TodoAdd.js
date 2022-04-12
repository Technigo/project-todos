import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoAdd = () => {

    const dispatch = useDispatch();
    
    const onClickAddNewTodo = () => {
        console.log('clicked add todo');
    }


    return (
        <div className="todo-add-new-todo container">
            <label>
                Title
                <input 
                type="text" 
                />
            </label>
            <label>
                What to do?
                <textarea 
                rows="4"
                cols="50" 
                />
            </label>
            <button
                type="submit"
                onClick={() => onClickAddNewTodo()}>
                ADD
            </button>
        </div>
    );
}

export default TodoAdd;