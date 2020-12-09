import React from 'react';
import { useDispatch } from 'react-redux';
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

export const RemoveCompleted = () => {

    const dispatch = useDispatch();

    const handleRemoveButton = () => {
        dispatch(todos.actions.removeAllCompleted());
    };

    return (
        <Button
            onClick={handleRemoveButton}
        >
            Remove completed tasks
        </Button>
    );
};