import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todolist } from 'reducers/todolist';

import { AddToDoForm, AddToDoInputField, LabelText, Select, AddButton } from '../styled-components/AddToDoComponents';

// This is the component where user can add a new item to the list
export const AddToDoInput = () => {
  const todoList = useSelector((store) => store.todolist);

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
    
    // Setting the id for the new tasks to be added by finding the id with the max
    // value in the existing array and adding + 1
    // the only tasks with a set id are the ones included in the initial state
    dispatch(todolist.actions.addToDo({
      id: Math.max(...todoList.items.map(item => item.id)) + 1,
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
    <AddToDoForm onSubmit={handleOnSubmit}>
      <LabelText>
        Add To Do: 
        <AddToDoInputField 
          type="text"
          onChange={event => setNewTodoItem(event.target.value)}
          value={newTodoItem}
          required >
        </AddToDoInputField>
      </LabelText>
      <LabelText>
        Category:
        <Select value={category} onChange={(event) => setCategory(event.target.value)} required>
          <option value="">Select category...</option>
          <option value="Studies">Studies</option>
          <option value="House Chores">House Chores</option>
          <option value="Shopping List">Shopping List</option>
          <option value="Other">Other</option>
        </Select>
      </LabelText>
      <AddButton type="submit">+</AddButton>
    </AddToDoForm>
  )
};
