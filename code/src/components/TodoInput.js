import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; //uniqe ID

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { todos } from '../reducers/todos';
//import Button from './Button';
import { Button } from '../lib/Button';
import { LabelTitle, InputParagraph } from '../lib/Text'
import DatePicker from 'react-date-picker';
//import DatePicker from 'react-datepicker';
import styled from 'styled-components'


const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  //console.log(dueDate)
  const history = useHistory();

  const categories = useSelector(store => store.todos.list.categories)
  //console.log(categories)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(todoInput)

    //use dispatch to dispatch the action to save my new todo item
    dispatch (
      todos.actions.addTodo({
        todoItemInfo: {
          id: uuidv4(), 
          description: todoInput,
          complete: false,
          category: category,
          dueDate: dueDate.getTime(),
          // display: true,
        },  
      })
    )
    setTodoInput('');
    history.goBack();
    //dispatch(todos.actions.navHomePage())  
    //console.log(handleOnSubmit)
  };
 console.log(handleOnSubmit)
 console.log(todoInput)

return (
  <Form onSubmit={handleOnSubmit}>
    <LabelTitle htmlFor="text">Enter a todo:</LabelTitle>
    <textarea 
      name="text"
      id="text"
      rows="4"
      placeholder="Add a todo!"
      onChange={event => setTodoInput(event.target.value)}
      value={todoInput}
      className="todo__input" 
    />
    <InputParagraph>Due Date:</InputParagraph>
    <DatePicker 
      name="due"
      id="due"
      onChange={(date) => setDueDate(date)}
      value={dueDate}
      //selected={dueDate}
      //onChange={date => setDueDate(date)}
    /> 
    <LabelTitle htmlFor="category">Choose a category:</LabelTitle>
    <select 
      name="category" 
      id="category" 
      onChange={(event) => setCategory(event.target.value)} 
      value={category}>
      {categories.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
      <Button 
        type="submit"
        disabled={!todoInput}
        //onClick={() => history.goBack()}
      >
        <InputParagraph>Add Todo</InputParagraph>
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
padding: 20px;
`
/*

- Recieves listId as input 
- state for input from text box 
- create handle submit function to dispatch addTodo 

 */