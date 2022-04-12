import React from 'react';
import { useState } from 'react';
import { createDispatchHook, useDispatch } from 'react-redux';
import todo from 'reducers/todo';

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
      <form>
        <span>Add your todo here: </span>
        <input
          type='text'
          placeholder='Add your todo..'
          minlength='3'
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button onClick={onTodoText}>add</button>
        <button onClick={() => dispatch(todo.actions.deleteAllTasks(todo))}>
          remove all
        </button>
      </form>
    </>
  );
};

export default AddTodo;
