import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const ToDoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  return <div>{item.text}</div>;
};
