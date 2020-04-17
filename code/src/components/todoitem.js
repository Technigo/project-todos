import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const ToDoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    dispatch(
      todos.actions.setCompleted({
        itemIndex: itemIndex,
        completed: !item.completed,
      })
    );
  };

  if (!item.text) {
    return <></>;
  } else {
    return (
      <div>
        {item.text}
        <input
          type='checkbox'
          onChange={handleOnChange}
          checked={item.completed ? 'completed' : ''}
        ></input>
      </div>
    );
  }
};
