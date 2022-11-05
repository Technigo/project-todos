import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'
import Counter from './Counter'

const TaskForm = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.addTodo(newTodo));
    setNewTodo('');
  };

  const handleClearAllButtonClick = () => {
    dispatch(tasks.actions.clearAll())
  }

  return (
    <TaskformWrapper>
      <CounterAndClearAllBtn>
        <Counter />
        <ClearAllBtn all type="button" onClick={handleClearAllButtonClick}>Clear all </ClearAllBtn>
      </CounterAndClearAllBtn>
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

const TaskformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--light-color);
  padding-bottom: 10px;
  @media (min-width: 667px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
    align-items: center;
  }
`

const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
margin-top: 20px;
padding-bottom: 10px;
`;

const SubmitBtn = styled(Button)`
border: none;
border-radius: 20px;
height: 40px;
width: 40px;
background-color: #936f63;
color: #eee6dd;
@media (min-width: 667px) and (max-width: 1024px) {
  height: 60px;
  width: 60px;
  font-size: 40px;
}
@media (min-width: 1025px) {
}
`

const Input = styled.input`
width: 300px;
height: 30px;
margin: 10px;
border: none;
border-radius: 20px;
font-size: 1rem;
background-color: #eee6dd;
::placeholder,
  ::-webkit-input-placeholder {
    color: #936f63;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 50px;
  }
  @media (min-width: 1025px) {
  }
`

const CounterAndClearAllBtn = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 30px;
`

const ClearAllBtn = styled.button`
border: none;
border-radius: 20px;
padding: 7px;
background-color: #eee6dd;
color: #936f63;
margin-right: 10px;
`