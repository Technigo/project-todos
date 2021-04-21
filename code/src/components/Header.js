import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Header = () => {

  const date = moment().format('MMM Do'); 

  const tasks = useSelector((store) => store.todos.tasks)

  let undoneTasks = tasks.filter((task) => !task.isComplete)
  undoneTasks = undoneTasks.length

  return (
    <div className='header-container'>
      <h1>Vacay Planner!</h1>
      <div className='info-container'>
        <p>{date}</p>
        <p>{undoneTasks} to-do's</p>
        
      </div>
    </div>
  )
}

export default Header