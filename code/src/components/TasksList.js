import React from 'react';
import { useSelector } from 'react-redux'

export const TasksList = () => {
  const tasksList = useSelector((store) => store.tasks.todos)
  return (
    <section>
      <ul>
        {tasksList.map((singleTask) => {
          return <li key={singleTask.id}>{singleTask.text}</li>
        })}
      </ul>
    </section>
  )
}