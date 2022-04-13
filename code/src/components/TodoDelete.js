import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoDelete = ({ todo }) => {


    const dispatch = useDispatch();
    
    const deleteTodo = (todoId) => {
        console.log('delete');
    }

    const DeleteTodoButton = styled.button `
        background-color: #f05cb5;
        border: 2px solid #000;
        position: absolute;
        top: 0;
        right: 10px;
        cursor: pointer;
        font-weight: 600;
        &:hover {
            background-color: #000;
            color: #f05cb5;
            border: 2px solid #f05cb5;
        }
    `

    return (
        <DeleteTodoButton type="submit" onClick={() => deleteTodo(todo.id)}>
            X
        </DeleteTodoButton>
        
    );
}

export default TodoDelete;