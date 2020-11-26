import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { v4 as uuidv4 } from 'uuid'; //uniqe ID

import { todos } from '../reducers/todos';

import { Button } from '../lib/Button';
import { LabelTitle, Paragraph } from '../lib/Text';
import { Select } from '../lib/Select';
import styled from 'styled-components';


const TodoInput = () => {
  const [todoInput, setTodoInput] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const dispatch = useDispatch();
  const history = useHistory();
  const createdDate = new Date();

  const categories = useSelector(store => store.todos.list.categories)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    dispatch (
      todos.actions.addTodo({
        todoItemInfo: {
          id: uuidv4(), 
          description: todoInput,
          complete: false,
          category: category,
          createdAt: createdDate.getTime(),
          dueDate: dueDate.getTime(),
        },  
      })
    )
    setTodoInput('');
    history.goBack();
    console.log(todoInput)
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {/* <LabelTitle htmlFor="text">Enter a todo:</LabelTitle> */}
      <Input 
        type="text"
        id="text"
        placeholder="Enter todo..."
        onChange={event => setTodoInput(event.target.value)}
        value={todoInput}
        className="todo__input" 
      />

      <LabelTitle htmlFor="due">Due Date:</LabelTitle>
      <DatePicker 
        id="due"
        onChange={(date) => setDueDate(date)}
        value={dueDate}
      /> 
      <LabelTitle htmlFor="category">Choose category:</LabelTitle>
      <Select 
        id="category" 
        onChange={(event) => setCategory(event.target.value)} 
        value={category}>
        {categories.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
      <Button 
        type="submit"
        disabled={!todoInput}
      >
        <Paragraph>Add Todo</Paragraph>
      </Button>   
    </Form>
)
}
export default TodoInput;

export const Form = styled.form `
  height: 50vh;
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;

  max-width: 700px;
  width: 100%;
`
export const Input = styled.input.attrs({ type: 'text' }) `
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #3d5f6b;
  height: 30px;
    ::placeholder {
      font-size: 20px;
      font-family: 'Architects Daughter', cursive;
      color: #fff;
    }
`
