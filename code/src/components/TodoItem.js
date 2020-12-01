import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';

const DeleteButton = styled.span`
background: #EFEAFD;
font-size: 12px;
padding: 3px;
border-radius: 5px;
cursor: pointer;
`;

export const TodoItem = ({ itemIndex }) => {
    //Get correct item from store based on index
    const item = useSelector(store => store.todos.list.items[itemIndex]);
    const dispatch = useDispatch();

    const handleCheckbox = event => {
        dispatch(
            todos.actions.toggleComplete({
            itemIndex: itemIndex,
            isComplete: !item.isComplete
            })
        )
    }

    const handleDelete = event => {
        dispatch(
            todos.actions.removeTodo({
            itemIndex: itemIndex
            })
        )
    }

    return (
        <div className={`todo-item ${item.isComplete ? 'complete' : ''}`}>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                checked={item.isComplete ? 'checked' : ''}
            />
             <span>{item.text} | </span>
            <DeleteButton onClick={handleDelete}> Delete </DeleteButton>
        </div>
    );
};