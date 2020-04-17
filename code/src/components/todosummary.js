import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const Summary = () => {
  // pick up the list from the store
  const list = useSelector((store) => store.todos.list);

  // Counter of how many tasks left to do
  const uncompleted = list.items.filter((item) => !item.completed).length - 1;

  return (
    <div>
      <p>{uncompleted}</p>
    </div>
  );
};
