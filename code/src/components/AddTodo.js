import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';

export const AddTodo = () => { 
  const dispatch = useDispatch();
  const [addTodo, setAddTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(
      todos.actions.addTodo(
        {
          id: Date.now(),
          text: addTodo,
          complete:false,
        }
      )
    );
    setAddTodo ('');
  };

  // adds users input to the to-do list by pushing (push()) data into the array, defined in the
  //todos.js reducer
  return (
    <AddTodoForm onSubmit={handleSubmit}>
      <NewTodo>
      <TodoText type='text' required
        value={addTodo}
        placeholder='Start typing to add task'
        onChange={(event)=> 
        setAddTodo(event.target.value)}/>

        <AddButton type='submit'
          disabled={addTodo.length < 5 }>
            ADD TASK
          </AddButton>
      </NewTodo>
    </AddTodoForm>
  );
};

const AddTodoForm = styled.form`
  width: 100%; 
  margin-top: 50px;
`
const NewTodo = styled.div`
  display: flex; 
  align-items: center;
  flex-direction: column;
`
const TodoText = styled.textarea`
  border-radius: 16px;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  border-collapse: collapse;
  text-align: center;
  overflow-wrap: break-word;
  display: flex;
  width: 300px;
  resize: none;
  min-height: 100px;
  margin: 0;
`

const AddButton = styled.button`
  align-self: center;
  font-size:30px;
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
`