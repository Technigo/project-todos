import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import todo from 'reducers/todo'
import uniqid from 'uniqid'
import Fab from '@mui/material/Fab';
import { Add, Close } from '@mui/icons-material'
import { Form } from 'styledcomponents/Input'

const TodoSubmitForm = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('')
  const [visible, setVisible] = useState(false)

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

  const toggleClass = () => {
    setVisible(!visible)
  }
  return (
    <section>
      <div className="fab-container">
        <ExpandButton
          onClick={toggleClass}>
          {visible ? <Close /> : <Add />}
        </ExpandButton>
      </div>
      <Form onSubmit={handleSubmit} className={visible ? 'input-active' : 'input-hidden'}>
        <input
          type="text"
          value={newTask}
          placeholder="Add new task..."
          onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit" disabled={newTask.length < 4}> Add new task </button>
      </Form>
    </section>
  )
}
export default TodoSubmitForm;

const ExpandButton = styled(Fab)`
color: white;
background-color: orange;

&:hover{
    color: orange;
    background-color: white;
}
`