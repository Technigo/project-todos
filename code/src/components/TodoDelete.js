import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

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

const TodoDelete = ({ index }) => {

    const dispatch = useDispatch();
    
    const deleteTodo = (index) => {
        console.log('delete' + index);
        dispatch(todos.actions.deleteTodo(index));
    }

    

    return (
        <DeleteTodoButton onClick={() => deleteTodo(index)}>
            X
        </DeleteTodoButton>
        
    );
}

export default TodoDelete;