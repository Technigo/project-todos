import React from 'react';
import { useSelector } from 'react-redux';

// Component showing the app's header including the amount of tasks missing to be completed.
// It accesses the global state and gets the complete current to do list, then filters out the
// tasks in that list with property complete: false, and returns the length of that array
export const Header = () => {
  const toDoList = useSelector((state) => state.todolist.items);
  const missing = toDoList.filter(x => x.complete === false);
  const missingCount = missing.length;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const mm = date.getMonth();
  const month = months[mm];
  const dd = date.getDate();
  const specificWeekday = date.toLocaleDateString('en-US', {weekday: 'long'});

  return (
    <header>
      <h1>TO DO APP</h1>
      <h2>{`${specificWeekday}, ${month} ${dd}`}</h2>
      <h3>{`You are missing: ${missingCount} tasks`}</h3>
    </header>
  )
};
