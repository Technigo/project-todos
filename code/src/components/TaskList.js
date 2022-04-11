import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import { FlexColumn } from './styles/Containers.styled'

import taskList from '../reducers/tasks'


const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <FlexColumn>
      {allTasks.map((task => (
        <div key={task.id}>
          <label htmlFor="checkTask">
            <input 
             type="checkbox" 
             name="checkTask" 
             checked={task.isDone}
             />
             <span>{task.taskInput}</span>
          </label>
          <button>
          <img
          src='./images/remove-icon.svg'
          alt='remove task'
        />
        </button>
        </div>
      )))}
    </FlexColumn>
  )
}

export default TaskList
