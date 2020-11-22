import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { todos } from '../reducers/todos.js';

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector((store) => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  // Create the onRemoveClicked handler
  const onRemoveClicked = () => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    );
  };

  // Create the onChange handler for handling the done status. Dispatch the action
  // called setDone and sends with it two pieces of info: the index of the item
  // and the value of onChangeValue. Done or not. This new value is listened to
  // by the setDone reducer in todos, and sets the new value in the global state.
  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  return <div className={`todo-item ${item.done ? 'done' : ''}`}>
    <input
      type='checkbox'
      onChange={handleOnChange}
      className='todo-item-check'
      checked={item.done ? 'checked' : ''}
    ></input>
    <span className='todo-item-text'>{item.description}</span>
    <a className='todo-item-remove' onClick={onRemoveClicked}>
      [Remove]
    </a>
  </div>;
};