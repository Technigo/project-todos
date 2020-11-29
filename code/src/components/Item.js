import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

const Item = ({ id, name, isComplete}) => {
    const dispatch = useDispatch();

    const itemDelete = () => {
        dispatch(todos.actions.removeItem(id))
    }
    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (
        <div>
            <div>{name}</div>
            <div onClick={onIsCompletedChange}>
                {isComplete ? "☒" : "☑︎"}
            </div>
            <div onClick={itemDelete}>ⓧ</div>   
        </div>
    );
};
    export default Item;