import React from 'react'
import { useSelector } from 'react-redux'
import Task from 'components/Task'


const TaskList = () => {

const list = useSelector(state => state.tasks)
console.log(list)
  return (
    <ul>
      <li>{list.map((task, index) => (
        <Task 
          key={index}
          id={index}
          task={task} />
      ))}</li>
    </ul>
  )
}

export default TaskList