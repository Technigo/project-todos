import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const NewTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const taskArray = useSelector((store) => store.tasks.todos)

  const onAddNewTask = (event) => {
    event.preventDefault()

    const newTodo = {
      id: taskArray.length + 1,
      title: newTask,
      isDone: false
    }

    dispatch(tasks.actions.addNewTask(newTodo))

    setNewTask('')
  }
  return (
    <form onSubmit={onAddNewTask}>
      <div>
        <input
          type="text"
          id="text"
          placeholder="Add new task here"
          autoComplete="off"
          value={newTask}
          maxLength="40"
          size="30"
          onChange={(event) => setNewTask(event.target.value)}
          required />
      </div>
      <div className="button-container">
        <button type="submit">Add new task</button>
      </div>
    </form>
  )
}
export default NewTask;

// addNewTask: (store, action) => {
//   store.todos.push(action.payload)