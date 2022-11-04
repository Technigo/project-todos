import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'

const TaskForm = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <TaskformWrapper>
      <Form>
        <Input
          type="input"
          placeholder="Add task here..."
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
          required />
        <SubmitBtn
          type="submit"
          onClick={addTask}
          disabled={newTodo.length === 0}>+
        </SubmitBtn>
      </Form>
    </TaskformWrapper>
  )
}

export default TaskForm;

const TaskformWrapper = styled.section`

`

const Form = styled.form`
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
`

const SubmitBtn = styled(Button)`
border: none;
border-radius: 20px;
height: 40px;
width: 40px;
background-color: #936f63;
color: #eee6dd;
`

const Input = styled.input`
width: 220px;
height: 30px;
margin: 10px;
border: none;
font-size: 1rem;
background-color: #eee6dd;
`