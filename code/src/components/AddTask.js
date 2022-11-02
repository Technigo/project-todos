import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import uniqid from 'uniqid';
import { OuterWrapper, InnerWrapper } from './styling/GlobalStyling';

const AddTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewTask = {
      id: uniqid(),
      task: newTask,
      completed: false
    };
    dispatch(todo.actions.addItem(addNewTask))
    setNewTask('');
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <button type="button" onClick={toggleClass}>&#9547;</button>
        <form onSubmit={handleSubmit} className={isActive ? 'active' : 'hidden'}>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button type="submit">Add new task</button>
        </form>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default AddTask