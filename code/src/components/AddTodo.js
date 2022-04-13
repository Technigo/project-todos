import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import styled from 'styled-components';

const TodoInput = styled.input`
  width: 90%;
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  height: 38px;
  border: none;
  border-bottom: 1px solid rgb(50, 78, 168);
  border-radius: 4px;
  font-size: 20px;
`;

const TodoWrapper = styled.form`
  padding-top: 20px;
  text-align: center;
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const onTodoText = (event) => {
    event.preventDefault();
    dispatch(todo.actions.addTodo({ newTodo }));
    setNewTodo('');
  };

  return (
    <>
      <TodoWrapper>
        <TodoInput
          type='text'
          placeholder='Add your todo..'
          minLength='3'
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button onClick={onTodoText}>add</button>
        <button onClick={() => dispatch(todo.actions.deleteAllTasks(todo))}>
          remove all
        </button>
      </TodoWrapper>
    </>
  );
};

export default AddTodo;
