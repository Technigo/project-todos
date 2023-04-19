import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => { // Function.
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return <li key={singleTask.id}>{singleTask.name}</li>
        })}
      </ul>
    </section>
  )
}
// store = backpack
export default TaskList;
// This component uses useSelector to fetch the list of tasks and map over them.