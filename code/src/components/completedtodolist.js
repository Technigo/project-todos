import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const CompletedTasks = () => {
  // pick up the list from the store
  const list = useSelector((store) => store.todos.list);

  // Counter of how many tasks left to do
  const completed = list.items.filter((item) => item.completed);

  if (completed == 0) {
    return (
      <div>
        <p> You have not completed any tasks yet.</p>
      </div>
    );
  } else {
    return <div>Completed tasks: {completed.map((item) => item.text)}</div>;
  }
};
