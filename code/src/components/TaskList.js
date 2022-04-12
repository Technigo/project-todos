import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import { TaskListFlexColumn, TaskListWrapper, TaskListWrapperLabel } from './styles/Containers.styled'
import { Tag } from './styles/Tags.styled'
import { Task, DoneTask } from './styles/FontsAndSpans.styled'
import { RemoveTaskButton } from './styles/Buttons.styled'

import { tasks } from '../reducers/tasks'

const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch()

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleDoneTask(taskId));
  }

  return (
    <TaskListFlexColumn>
      {allTasks.map((task => (
        <TaskListWrapper key={task.id}>
          <TaskListWrapperLabel htmlFor="checkTask">
            <input
              type="checkbox"
              name="checkTask"
              checked={task.isDone}
              onChange={() => dispatch(() => onTaskToggle(task.id))}
            />
            {task.isDone ? <DoneTask>{task.task}</DoneTask> : <Task>{task.task}</Task>}
            {(() => {
              switch (task.tag) {
                case "work": return <Tag color='#3DB429'> work </Tag>
                case "study": return <Tag color='#F36969'> study </Tag>
                case "shopping": return <Tag color='#5B87C9'> shopping</Tag>
                case "gym": return <Tag color='#A093D4'> gym </Tag>
                case "other": return <Tag color='#FB9A08'> other </Tag>
                case "": return null
              }
            })()}
            <button>
              <RemoveTaskButton
                src='./images/remove-icon.svg'
                alt='remove task'
              />
            </button>
          </TaskListWrapperLabel>
        </TaskListWrapper >
      )))}
    </TaskListFlexColumn>
  )
}

export default TaskList
