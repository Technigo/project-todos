import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; //uniqe ID

//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { todos } from '../reducers/todos';
//import Button from './Button';
import { Button } from '../lib/Button';
import { LabelTitle, Paragraph } from '../lib/Text'
import { Select } from '../lib/Select';
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
    //console.log(todoInput)

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
 //console.log(handleOnSubmit)
 //console.log(todoInput)

return (
  <Form onSubmit={handleOnSubmit}>
    {/* <LabelTitle htmlFor="text">Enter a todo:</LabelTitle> */}
    <Input 
      type="text"
      name="text"
      id="text"
      placeholder="Enter todo..."
      onChange={event => setTodoInput(event.target.value)}
      value={todoInput}
      className="todo__input" 
    />

    <LabelTitle htmlFor="due">Due Date:</LabelTitle>
    <DatePicker 
      name="due"
      id="due"
      onChange={(date) => setDueDate(date)}
      value={dueDate}
      //selected={dueDate}
      //onChange={date => setDueDate(date)}
    /> 
    <LabelTitle htmlFor="category">Choose category:</LabelTitle>
    <Select 
      name="category" 
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
        //onClick={() => history.goBack()}
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
