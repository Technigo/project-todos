
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'lib/Button';

import { todos } from '../reducers/todos';

export const TodoItem = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (
    
        <div>
            <div>{name}</div>
            <div onClick={onIsCompletedChange}>
                {isCompleted ? "☑️" : "🔲 "}
            </div>
            <Button onClick={onTodoDelete}>Remove</Button>
        </div>
       
    );
}






