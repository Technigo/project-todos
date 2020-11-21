import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todolist } from 'reducers/todolist';

export const AddToDoInput = () => {
  const todoList = useSelector((store) => store.todolist.list.items);
  const [newTodoItem, setNewTodoItem] = useState('');

  const dispatch = useDispatch();

  const setNewToDoId = todoList.length + 1;

  // console.log(setNewToDoId);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    dispatch(todolist.actions.addToDo({
      id: setNewToDoId,
      text: newTodoItem,
      complete: false,
      // category: 
    })
  );

    // Clear input field
    setNewTodoItem('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Add To do Item
        <input 
          type="text"
          onChange={event => setNewTodoItem(event.target.value)}
          value={newTodoItem}>
        </input>
        <button type="submit">Add To Do</button>
      </label>
    </form>
  )
};
