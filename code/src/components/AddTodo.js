import { Container } from 'lib/Container';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Button } from 'lib/Button';
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
            <Button onClick={onTodoAdd}>Add todo</Button>
        </div>
        </Container>
    );
};

