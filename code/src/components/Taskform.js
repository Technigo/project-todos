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
    flex-direction: column;
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
align-items: center;
width: 100%;
margin-top: 20px;
padding-bottom: 10px;
@media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
    margin-top: 0px;
  padding-bottom: 0px;
  }
`

const SubmitBtn = styled(Button)`
border: 2px solid #f49c5c;
border-radius: 20px;
height: 40px;
width: 40px;
background-color: #fbf4ee;
color: #f49c5c;
margin-right: 20px;
@media (min-width: 667px) and (max-width: 1024px) {
  height: 60px;
  width: 60px;
  font-size: 40px;
}
@media (min-width: 1025px) {
  height: 60px;
  width: 60px;
  font-size: 40px;
}
`

const Input = styled.input`
width: 300px;
height: 50px;
margin: 20px 10px 20px 20px;
padding: 0.5vh 2vw;
border: 2px solid #f49c5c;
border-radius: 20px;
font-size: 1rem;
background-color: #fbf4ee;
::placeholder,
  ::-webkit-input-placeholder {
    color: #f49c5c;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 50px;
  }
  @media (min-width: 1025px) {
    width: 500px;
    font-size: 1.2rem;
  }
`

const CounterAndClearAllBtn = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 30px;

@media (min-width: 667px) and (max-width: 1024px) {
}
@media (min-width: 1025px) {
  margin-top: 0px;
}
`

const ClearAllBtn = styled.button`
border: none;
border-radius: 20px;
padding: 7px;
background-color: #f0732a;
color: #fff6f2;
margin-right: 20px;
@media (min-width: 667px) and (max-width: 1024px) {
  height: 40px;
  width: 100px;
  font-size: 18px;
}
@media (min-width: 1025px) {
  height: 60px;
  width: 100px;
  font-size: 18px;
}
`