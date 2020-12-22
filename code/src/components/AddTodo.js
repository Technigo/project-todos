import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';
import { Button } from 'Lib/Button';

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 230px;
    margin: 12px;
    padding: 8px;
    background: #ffb6d3;
    border-radius: 25px;

    @media (min-width: 667px){
        width: 350px;
    }
`;

const TextInput = styled.input`
    padding: 8px;
    border: none;
    border-radius: 15px;
    background: #ffb6d3;
    font-size: 13px;
    color: #000;

    @media (min-width: 667px){
        font-size: 16px;
    }
  `;

export const AddTodo = () => {
    //State for input from text box 
    const [task, setTask] = useState("");
    const [id, setId] = useState(1);
    const todosArray = useSelector((store) => store.todos.list.items);

    const dispatch = useDispatch();

    // Create handle submit function to dispatch AddTodo
    const handleSubmit = (event) => {
        event.preventDefault();
        //This is where we will dispatch the action to save the new todo item 
        dispatch(
            todos.actions.addTodo({
                id,
                task,
                complete: false,
            })
        );

        //Clear the text field
        setTask('');
    };

    const onChangeEvent = (value) => {
        setTask(value);
        setId(todosArray.length === 0 ? 1 : todosArray[todosArray.length-1].id + 1);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextInput
                type='text'
                aria-label="Add a task"
                value={task}
                onChange={event => onChangeEvent(event.target.value)}
                placeholder="Add a new task..."
                required
            />

            <Button
                type="submit"
                value="Add todo"
            > + </Button>
        </Form>
    );
};