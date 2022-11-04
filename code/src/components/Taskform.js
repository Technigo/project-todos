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
        <input
          type="input"
          placeholder="Add task here..."
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
          required />
        <Button
          type="submit"
          onClick={addTask}
          disabled={newTodo.length === 0}>Send
        </Button>
      </Form>
    </TaskformWrapper>
  )
}

export default TaskForm;

const TaskformWrapper = styled.section`
border: solid 2px red;
`

const Form = styled.form`
border: solid 2px green;
`