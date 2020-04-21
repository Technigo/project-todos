import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components'
import { Button } from 'lib/Button'

const TextInput = styled.input`
  width: 350px;
  height: 20px;
  margin: 10px 10px 20px 0;
  padding: 5px;
  border: none;
  border-radius: 7px;
  background: #F5F0D7;
  font-size: 16px;
`

export const TodoInput = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState("")

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false
      })
    );

    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextInput
        type="text"
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
        required
      ></TextInput>
      <Button
        type="submit"
        background="#ED839D"
        color="#F5F0D7"
      >+</Button>
    </form>
  )
};