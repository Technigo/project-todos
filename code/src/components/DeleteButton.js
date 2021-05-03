import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { todos } from '../reducers/todos';

export const DeleteButton = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <DeleteTodoButton type="button" onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            X
        </DeleteTodoButton>
    );
};

const DeleteTodoButton = styled.button`
    align-self: center;
    width: 20px;
    height: 20px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    font-size: 20px;
    background: ${props => props.background || "#fff"};
    color: grey;
    border: grey solid 3px;
    border-radius: 5px;
    &:hover {
        background: #b22222;
        cursor: pointer;
    }
`;