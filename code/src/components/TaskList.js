import React from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {
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

export default TaskList
