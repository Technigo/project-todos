import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const RemoveButton = () => {
        //Get correct item from store based on index
        const dispatch = useDispatch();

        const removeAllTodos = event => {
            dispatch(todos.actions.removeAll())
        }

    return (
        <button onClick={removeAllTodos}>Remove All</button>
    )
}