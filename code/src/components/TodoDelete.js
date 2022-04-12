import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoDelete = ({ todo }) => {

    const dispatch = useDispatch();
    
    const deleteTodo = (todoId) => {
        console.log('delete');
    }

    return (
        <button type="submit" onClick={() => deleteTodo(todo.id)}>
            X
        </button>
        
    );
}

export default TodoDelete;