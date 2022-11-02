import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'

const AddTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewTask = {
      id: 'id',
      task: newTask,
      completed: false
    };
    dispatch(todo.actions.addItem(addNewTask))
    setNewTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit">Add new task</button>
      </form>
      <button type="button">&#9547;</button>
    </div>
  )
}
export default AddTask