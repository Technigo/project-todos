import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const LabelTodoCompleted = styled.label `
    font-size: 1rem;
`

const CheckboxTodoCompleted = styled.input `
    border: 2px solid #000;
    cursor: pointer;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #fff;
        &:before {
            content: "";
            width: 1.2rem;
            height: 1.2rem;
        }
        &:checked {
            background-color: #40e0d0;
        }
`

const LabelCheckboxContainer = styled.div `
    display: flex;
    align-items: center;
`

const TodoCompleted = ({ todo }) => {

    const dispatch = useDispatch();
    
    const toggleCompleted = (todoId) => {
        dispatch(todos.actions.markAsCompleted(todoId));
    }

    return (
        <LabelCheckboxContainer>
            <LabelTodoCompleted htmlFor={todo.id}>
                Completed?
            </LabelTodoCompleted>
            <CheckboxTodoCompleted 
                type="checkbox" 
                id={todo.id}
                checked={todo.isCompleted} 
                onChange={() => toggleCompleted(todo.id)}
            />
        </LabelCheckboxContainer>
    );
}

export default TodoCompleted;