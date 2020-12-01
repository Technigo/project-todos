import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { TodoItem, RemoveButton, ClickedButton } from 'styled-components/Item';

const Item = ({ id, name, isComplete}) => {
    const dispatch = useDispatch();

    const itemDelete = () => {
        dispatch(todos.actions.removeItem(id))
    }
    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (
        <TodoItem>
            <div>{name}</div>
            <ClickedButton onClick={onIsCompletedChange}>
                {isComplete ? "☒" : "☑︎"}
            </ClickedButton>
            <RemoveButton onClick={itemDelete}>x</RemoveButton>   
        </TodoItem>
    );
};
    export default Item;