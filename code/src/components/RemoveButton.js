import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';

export const RemoveButton = () => {
        //Get correct item from store based on index
        const list = useSelector(store => store.todos.list.items);
        const dispatch = useDispatch();

        const removeAllTodos = event => {
            dispatch(todos.actions.removeAll())
        }

    return (
        <button onClick={removeAllTodos}>Remove All</button>
    )
}