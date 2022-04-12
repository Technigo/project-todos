import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoCompleted = ({ todo }) => {

    const dispatch = useDispatch();
    
    const toggleCompleted = (todoId) => {
        dispatch(todos.actions.markAsCompleted(todoId));
        console.log(todoId);
    }

    return (
        <label>
            Completed?
            <input 
            type="checkbox" 
            checked={todo.isCompleted} 
            onChange={() => toggleCompleted(todo.id)}
            />
        </label>
        
    );
}

export default TodoCompleted;