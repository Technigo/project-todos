/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { saveTodo } from 'reducers/todoSlice';

const Input = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    console.log(`Adding ${input}`)

    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  return (
    <TodoBarSection>
      <InputBar type="text" placeholder="Enter new todo..." value={input} onChange={(event) => setInput(event.target.value)} />
      <Button onClick={addTask}>Add!</Button>
    </TodoBarSection>
  )
}

export default Input;

const TodoBarSection = styled.div`
  height: 50px;
  width: 80%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBar = styled.input`
  background: none;
  border: none;
  margin-left: 12px;
  flex: 1;
    &:focus{
        outline: none;
    }
`;

const Button = styled.button`
  margin-right: 8px;
  background-color: rgb(214, 213, 213);
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 50px;
`;