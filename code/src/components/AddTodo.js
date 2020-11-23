import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const AddTodo = ({ todoId }) => { 
  const dispatch = useDispatch();
  const [addTodo, setAddTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(
      todos.actions.addTodo({
        todoId: todoId,
        todoInfo: { text: addTodo }
      })
    );
    setAddTodo ('');
  };

  // adds users input to the to-do list
  return (
    <form className='todoInput' onSubmit={handleSubmit}>
      <div className = 'textInput'>
      <textarea type='text' required
        value={addTodo}
        placeholder='Start typing to add task'
        onChange={(event)=> 
        setAddTodo(event.target.value)}/>

        <button type='submit'
          disabled={addTodo.length < 5 }>
            ADD TASK
          </button>
      </div>
    </form>
  );
};