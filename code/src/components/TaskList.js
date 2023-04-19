import React from 'react';
import { useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks'

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks.items)
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
export default TaskList;