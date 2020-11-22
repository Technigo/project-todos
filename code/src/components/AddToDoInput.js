import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todolist } from 'reducers/todolist';

export const AddToDoInput = () => {
  const [newTodoItem, setNewTodoItem] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    // Setting the id for the new tasks to be added by creating a Date this
    // makes the id be super unique and chances of it repeating are super low
    dispatch(todolist.actions.addToDo({
      id: Date.now(),
      text: newTodoItem,
      complete: false,
      category: category
    })
  );

    // Clear input field
    setNewTodoItem('');
    setCategory('');
};

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Add To do Item
        <input 
          type="text"
          onChange={event => setNewTodoItem(event.target.value)}
          value={newTodoItem}
          required >
        </input>
      </label>
      <label>
        Category for this task:
        <select value={category} onChange={(event) => setCategory(event.target.value)} required>
          <option value="">Select category...</option>
          <option value="Studies">Studies</option>
          <option value="House Chores">House Chores</option>
          <option value="Shopping List">Shopping List</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <button type="submit">Add To Do</button>
    </form>
  )
};
