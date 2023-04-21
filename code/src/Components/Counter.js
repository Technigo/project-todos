// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

// /////////////// COMPONENT //////////////////////// //

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items) // Items = store.tasks.items
  const completedTasks = items.filter((task) => task.isChecked);

  const Alldone = () => {
    if (items.length === 0) { // If there are no items in the store
      return '' // then return nothing
    } else if (items.length === completedTasks.length) { // But if all items are checked
      return `🎉 ${completedTasks.length} / ${items.length}` // then its party
    } else {
      return `${completedTasks.length} / ${items.length} ✔` // then its not party just yet.
    }
  };

  // /////////////// OUTCOME //////////////////////// //

  return (
    <div className="counter">
      <p className={items.length < completedTasks.length ? 'complete-todo' : ''}>
        {Alldone()}
      </p>
    </div>
  )
}