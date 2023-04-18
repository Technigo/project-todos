import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => (
          <li key={singleTask.id}>{singleTask.text}</li>
        ))};
      </ul>
    </section>
  )
}

export default TaskList;