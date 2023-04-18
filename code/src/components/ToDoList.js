import React from 'react'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const toDoList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {toDoList.map((singleTask) => {
          console.log(singleTask, 'map')
          return <li key={singleTask.id}>{singleTask.name}</li>
        })}
      </ul>
    </section>

  )
}

export default ToDoList