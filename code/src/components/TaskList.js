import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import AddTask from './AddTask'
import TaskItem from './TaskItem'

const TaskList = () => {
  const dispatch = useDispatch()
  const allTasks = useSelector((store) => store.tasks.items)

  const onDone = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onDelete = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex))
  }

  const todoTasks = allTasks.filter((task) => !task.isDone)
  const doneTasks = allTasks.filter((task) => task.isDone)

  return (
    <>
      <h2>Ongoing: {todoTasks.length}</h2>

      {todoTasks.length === 0 && (
        <p>You have no more tasks!</p>
      )}

      {todoTasks.map((task, index) => (<TaskItem
        task={task}
        index={index}
        key={task.id}
        onDelete={onDelete}
        onDone={onDone} />))}

      <AddTask />

      <h2>COMPLETED: {doneTasks.length}</h2>

      {doneTasks.map((task, index) => (<TaskItem
        task={task}
        index={index}
        key={task.id}
        onDelete={onDelete}
        onDone={onDone} />))}
    </>
  )
}

export default TaskList