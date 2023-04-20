/* import { CheckBox } from '@mui/icons-material'; */
import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
/*  const handleCheck = () => { } */
  const todoList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {todoList.map((singleTask) => {
          return <li key={singleTask.id}>{singleTask.taskName}</li>
        })}
      </ul>
    </section>
  )
}

export default TaskList;