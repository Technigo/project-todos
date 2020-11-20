import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';
import Button from './Button';


const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const [category, setCategory] = useState('');


  const categories = useSelector(store => store.todos.list.categories)
  console.log(categories)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(todoInput)

    //use dispatch to dispatch the action to save my new todo item
    dispatch (
      todos.actions.addTodo({
        todoItemInfo: {
          description: todoInput,
          complete: false,
          category: category,
        },  
      })
    )
    setTodoInput('');
    dispatch(todos.actions.navHomePage())  
  };
 
return (
  <form onSubmit={handleOnSubmit}>  
    <textarea 
      rows="4"
      placeholder="Add a todo!"
      onChange={event => setTodoInput(event.target.value)}
      value={todoInput}
      className="todo__input" 
    />

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
      className="todo__submit"
      text="Add todo"
    />
    
  </form>
)
}
export default TodoInput;

/*

- Recieves listId as input 
- state for input from text box 
- create handle submit function to dispatch addTodo 

 */