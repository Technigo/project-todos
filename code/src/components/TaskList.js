import React from 'react';
import { useSelector } from 'react-redux';

/* modern React components are functions */
export const TaskList = () => {
/* useSelector extracts data from the Redux store state into a React component
whenever store is update useSelector is notified makes component re-render */
  const taskList = useSelector((store) => store.task.items)

  /* map below works because of spread operator in Task.js
  that creates an array and includes new tasks added
  without any nesting - if there were nesting
  we would get an undefined error doing map */
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return <li key={singleTask.id}> {singleTask.content} </li>
        })}
      </ul>
    </section>
  );
}