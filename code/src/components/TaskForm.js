import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import styled from 'styled-components/macro'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'

import todos from '../reducers/todos';

const style = { color: 'white', fontSize: '2em' };

const TaskForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id:  uniqid(),
            description: value,
            isComplete: false
        };

        dispatch(todos.actions.addTodo(newTask));
        setValue('');
    }

    return (
        <Form onSubmit={e => onFormSubmit(e)}>
            <InputWrapper>
                <InputField 
                    type="text"
                    value={value}
                    required
                    onChange={e => setValue(e.target.value)}
                    placeholder="Write todo's here..."

                />
                <IconButton type="submit"><AddCircleOutline style={style} /></IconButton>
            </InputWrapper>
        </Form>
    )
};

export default TaskForm;

const Form = styled.form`
    margin-top: 4rem;
    width: 100%;
    z-index: 0;
    position: relative;
    top: 1px;
`
const InputWrapper = styled.div`
    border-radius: 20px 20px 0 0;
    background-color: #2EC4B6;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const InputField = styled.input`
    border: none;
    border-radius: 10px;
    height: 2.5rem;
    width: 75%;
    padding: 0 8px;
    font-family: "Josefin Sans", sans-serif;
`

