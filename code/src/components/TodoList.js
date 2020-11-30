import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem.js';

export const TodoList = () => {
    //Get todo list from the store
    const list = useSelector(store => store.todos.list);

    return (
        <section>
            {list.items.map((item, index) => (
                <TodoItem itemIndex={index}/>  
            ))}
        </section>
    );
};