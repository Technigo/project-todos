import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import Button from './Button';


const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(todoInput)

    //use dispatch to dispatch the action to save my new todo item
    dispatch (
      todos.actions.addTodo({
        todoItemInfo: {
          description: todoInput,
          complete: false,
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