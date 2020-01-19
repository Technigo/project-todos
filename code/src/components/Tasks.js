import React from 'react'
import {useSelector} from 'react-redux'
import {Task} from './Task.js'
import './tasks.css'

export const Tasks = () => {
    const tasks = useSelector((store) =>store.tasks.items)

    return (
        <ul> 
          {tasks.map((task)=> (
              <p>
              <Task key={task.id} props={task}/> 
              </p>
          ))}
        </ul>
    )
}