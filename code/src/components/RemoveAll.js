import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 8px;
    margin: 10px;
    font-weight: bold;
    font-size: 16px;
    transition: all 150ms;
    background: #fceef5;
    cursor: pointer; 

    &:hover {
        background: #ffb6d3;
    }
`;

export const RemoveAll = () => {
    const items = useSelector((store) => store.todos.list.items)
    const enable = items.length > 0;

    const dispatch = useDispatch();

    const handleRemoveButton = () => {
        dispatch(todos.actions.removeAll())
    };

    return (
        <Button
            onClick={handleRemoveButton}
            disabled={!enable}>
            Remove all
        </Button>
    );
};