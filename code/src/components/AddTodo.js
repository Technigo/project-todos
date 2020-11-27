import { Container } from 'lib/Container';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const AddTodo = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const onTodoAdd = () => {
        dispatch(todos.actions.addItem(value));
    }

    return (
        <Container>
        <div>
            <input
                type="text"
                placeholder="this needs to get done....."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={onTodoAdd}>Add todo</button>
        </div>
        </Container>
    );
};

