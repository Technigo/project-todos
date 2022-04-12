import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import { TaskListFlexColumn, TaskListWrapper } from './styles/Containers.styled'
import { Tag } from './styles/Tags.styled'
import { Task } from './styles/FontsAndSpans.styled'
import { RemoveTaskButton } from './styles/Buttons.styled'



const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <TaskListFlexColumn>
      {allTasks.map((task => (
        <TaskListWrapper key={task.id}>
          <label htmlFor="checkTask">
            <input 
             type="checkbox" 
             name="checkTask" 
             checked={task.isDone}
             />
             <Task>{task.task}</Task>
             <Tag>{task.tag} </Tag>
          
          <button>
          <RemoveTaskButton
          src='./images/remove-icon.svg'
          alt='remove task'
        />
        </button>
        </label>
        </TaskListWrapper >
      )))}
    </TaskListFlexColumn>
  )
}

export default TaskList
