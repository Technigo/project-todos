import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';
import moment from 'moment';

export const ToDoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  // will send info to the store on whether task is completed or not
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
        <p>added {moment(item.createdAt).format('ll')}</p>
      </div>
    );
  }
};
