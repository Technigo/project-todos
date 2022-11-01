import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import uniqid from 'uniqid'

const TodoSubmitForm = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const postNewTask = {
      id: uniqid(),
      task: newTask,
      completed: false
    };
    dispatch(todo.actions.addItem(postNewTask))
    setNewTask('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit" disabled={newTask.length < 4}> Add new task </button>
      </form>
    </section>
  )
}
export default TodoSubmitForm;

