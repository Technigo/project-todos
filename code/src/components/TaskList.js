import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import { TaskListFlexColumn, TaskListWrapper, TaskListWrapperLabel, FlexRow } from './styles/Containers.styled'
import { Tag } from './styles/Tags.styled'
import { Task, DoneTask } from './styles/FontsAndSpans.styled'
import { RemoveTaskButton, FilterButton } from './styles/Buttons.styled'

import { tasks } from '../reducers/tasks'

const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch()

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleDoneTask(taskId))
  }

  const onTaskRemove = (index) => {
    dispatch(tasks.actions.removeTask(index))
  }

  return (
    <TaskListFlexColumn>
      <FlexRow>
        <FilterButton color='#5B87C9'>All Tasks</FilterButton>
        <FilterButton color='#C95B5B'>To do</FilterButton>
        <FilterButton color='#58BB48'>Done</FilterButton>
      </FlexRow>
      {allTasks.map((task) => (
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
                case "other": return <Tag color='#FB9A08'> other </Tag>
                case "": return null
                default: return null
              }
            })()}
            <button onClick={() => onTaskRemove(task.id)}>
              <RemoveTaskButton
                src='./images/remove-icon.svg'
                alt='remove task'
              />
            </button>
          </TaskListWrapperLabel>
        </TaskListWrapper >
      ))}
    </TaskListFlexColumn>
  )
}

export default TaskList
