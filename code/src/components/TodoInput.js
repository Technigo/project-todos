import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; //uniqe ID

import { todos } from '../reducers/todos';
//import Button from './Button';
import { Button } from '../lib/Button';
import DatePicker from 'react-date-picker';
//import DatePicker from 'react-datepicker';


const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  //console.log(dueDate)

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
    dispatch(todos.actions.navHomePage())  

  };
 //console.log(uuidv4)
return (
  <form onSubmit={handleOnSubmit}>
    <label htmlFor="text">Enter a todo:</label>
    <textarea 
      name="text"
      id="text"
      rows="4"
      placeholder="Add a todo!"
      onChange={event => setTodoInput(event.target.value)}
      value={todoInput}
      className="todo__input" 
    />
    <div>
    <p>Due Date:</p>
    <DatePicker 
      name="due"
      id="due"
      onChange={(date) => setDueDate(date)}
      value={dueDate}
      //selected={dueDate}
      //onChange={date => setDueDate(date)}
    /> 
    </div>
    <label htmlFor="category">Choose a category:</label>
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
      //className="todo__submit"
      //text="Add todo"
    >
      <p>Add Todo</p>
    </Button>
  
    
  </form>
)
}
export default TodoInput;

/*

- Recieves listId as input 
- state for input from text box 
- create handle submit function to dispatch addTodo 

 */