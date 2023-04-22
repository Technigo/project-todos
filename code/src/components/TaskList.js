import React from 'react';
import { useSelector } from 'react-redux';

/* modern React components are functions */
export const TaskList = () => {
// useSelector extracts data from the Redux store state into a React component
  const taskList = useSelector((store) => store.task.items)
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