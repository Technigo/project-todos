import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


import { todos } from '../reducers/todos';

const ButtonAdd = styled.button`
    padding: 10px;
    border-radius: 50%;
    border: 1px solid red;
    margin: 15px;
    background-color: #fff;
`

const Input = styled.input`
  height: 50px;
  min-width: 70%;
  font-size: 24px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
`;

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onTodoAdd = () => {
        setValue('');
        dispatch(todos.actions.addItem(value));
    }

    return (
        <Container>
            <div>
         
            <Input
                type="Text"
                placeholder="What's next?"
                maxLength="200"
                value={value}
                required
                onChange={e => setValue(e.target.value)}
            />
            <ButtonAdd 
            onClick={onTodoAdd} >
                <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
                    ➕
                </span> 
            </ButtonAdd>
                </div>
        </Container>
    );
};

export default AddTodo;

const Container = styled.div`
    width: 80%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: #fff
`;






