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
        <AddTaskText type="text" placeholder="Enter a title for this card" value={todo} onChange={(event) => setTodo(event.target.value)} onKeyDown={(e) => checkKey(e)} />
        <AddTaskButton
          onClick={onAddTask}
          disabled={todo.length >= 15 || todo.length <= 2}>
           +
        </AddTaskButton>
        <AddTaskButtonsClear>
          <AddTaskButtonCheck onClick={onCheckAllTask}>Check your tasks!</AddTaskButtonCheck>
          <AddTaskButtonClear onClick={() => { dispatch(tasks.actions.clearTask()) }}>
            Clear your board!
          </AddTaskButtonClear>
        </AddTaskButtonsClear>
      </AddTaskContainer>
    </AddTaskDiv>
  )
}

const AddTaskDiv = styled.div`
  padding: 10px;
`

const AddTaskContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const AddTaskText = styled.input`
  height: 40px;
  width: 485px;
  margin-bottom: 3px;
  padding-left: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  @media (max-width: 640px) {
    width: 150px;
    height: 26px;
  }
`

const AddTaskButton = styled.button`
  height: 42px;
  border: none;
  padding: 0 10px 0 10px;
  border-left: 1px solid lightgrey;
  border-radius: 0 20px 20px 0;
  background-color: white;
  font-size: 1.1rem;
  font-weight: 600;
  @media (max-width: 640px) {
    height: 28px;
    font-size: 0.8rem;
  }
  &:disabled {
    color: lightgrey;
  }
  &:hover {
    transform: scale(1.05);
    background-color: #0079bf;
  }
`

const AddTaskButtonsClear = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 250px;
  @media (max-width: 640px) {
    padding: 3px 6px;
    font-size: 0.7rem;
    grid-gap: 30px 60px;
  }
`

const AddTaskButtonCheck = styled.button`
  border: none;
  border-radius: 10px;
  margin: 30px 10px 0 0;
  padding: 5px 10px;
  background-color: #c4c9cc;
  font-weight: 600;
  @media (max-width: 640px) {
    padding: 3px 6px;
    font-size: 0.7rem;
  }
  &:hover {
    transform: scale(1.05)
  }
`

const AddTaskButtonClear = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #c4c9cc;
  margin: 30px 0 0 20px;
  padding: 5px 10px;
  font-weight: 600;
  @media (max-width: 640px) {
    padding: 3px 6px;
    font-size: 0.7rem;
  }
  &:hover {
    transform: scale(1.05)
  }
`
export default AddTask;