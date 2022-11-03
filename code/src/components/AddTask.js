/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

const AddTask = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(todo))
    setTodo('')
  }

  const onCheckAllTask = () => {
    dispatch(tasks.actions.checkAllTask())
  }

  const checkKey = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      onAddTask(e)
    }
  }

  return (
    <AddTaskDiv>
      <AddTaskContainer>
        <AddTaskText type="text" placeholder="Add your card" value={todo} onChange={(event) => setTodo(event.target.value)} onKeyDown={(e) => checkKey(e)} />
        <AddTaskButton
          onClick={onAddTask}
          disable={todo.length >= 50 || todo.length <= 2}>
            +
        </AddTaskButton>
        <div>
          <button onClick={onCheckAllTask}>Check your task!</button>
          <button onClick={() => { dispatch(tasks.actions.clearTask()) }}>
            Clear your Board!
          </button>
        </div>
      </AddTaskContainer>
    </AddTaskDiv>
  )
}

const AddTaskDiv = styled.div`
  padding: 10px;
`
const AddTaskContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
`
const AddTaskText = styled.input`
  height: 40px;
  width: 250px;
  margin-bottom: 3px;
  padding-left: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  @media (max-width: 450px) {
    width: 130px;
    height: 26px;
}`

const AddTaskButton = styled.button`
height: 42px;
  border: none;
  padding: 0 10px 0 10px;
  color: #422117;
  border-left: 1px solid lightgrey;
  border-radius: 0 20px 20px 0;
  background-color: white;
  font-size: 1.1rem;
  font-weight: 600;
  @media (max-width: 450px) {
    height: 28px;
    font-size: 0.8rem;
    }
    &:disabled{
    color: lightgrey;
    }
    &:hover{
    transform: scale(1.05)
`
export default AddTask;