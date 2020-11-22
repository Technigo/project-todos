import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todolist } from 'reducers/todolist';

// This is the component where user can add a new item to the list
export const AddToDoInput = () => {
  // The text describing the new task to add and the chosen category for this task
  // are saved as a local state and then this data is passed on to the global
  // state in the store when dispatching the addToDo action
  const [newTodoItem, setNewTodoItem] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  // Function called when the submit (Add To Do) button is clicked. This will dispatch
  // the addToDo action (one of our reducers). In this action what I want to do is send
  // in data to the global state regargind the new task to add to the list. So I pass in
  // an object containig the data on the new task to be added, this is the payload
  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    // Setting the id for the new tasks to be added by creating a Date: this
    // makes the id be super unique and chances of it repeating are super low
    // the only tasks with a set id are the ones included in the initial state
    dispatch(todolist.actions.addToDo({
      id: Date.now(),
      text: newTodoItem,
      complete: false,
      category: category
    })
  );

    // Clears input field
    setNewTodoItem('');
    setCategory('');
};

  // This component renders a text input field so the user can write down the new item to
  // add to the list. Then they can choose a category for this new task and when they click
  // on the Add to do buttton, the item will be added to the todolist global state which contains
  // all items in the to do list
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
