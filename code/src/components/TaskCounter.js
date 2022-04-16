import React from 'react'
import {useSelector} from 'react-redux'

export const TaskCounter=()=>{
const tasklist=useSelector((store)=>store.tasks.items)
const totalTasks=tasklist
const tasksCompleted=tasklist.filter((item)=>item.isDone===true)


if(totalTasks.length===0)
  return(
    <h3> Sweet, nothing to do today, enjoy!</h3>)
  else if(totalTasks.length===tasksCompleted.length)
  return(
    <h3>All done!</h3>)
  else 
    return (
      <div className="counter-container">
        <h4>You have completed {tasksCompleted.length} of {totalTasks.length} tasks</h4>
      </div>
      )
}