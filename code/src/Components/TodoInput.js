import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'
import { Input } from '../lib/Input'
import { Form } from '../lib/Form'

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState ("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    dispatch(todos.actions.addTodo({
      itemInfo: {
        description: inputValue,
        done: false
      }
    }));

    setInputValue("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type="text"
        onChange={ e => setInputValue(e.target.value)}
        value={inputValue}>
      </Input>
      <br/>
      <Button
        type="submit"
        value="Add todo">
        Add Todo
      </Button>
    </Form>
    );
  };