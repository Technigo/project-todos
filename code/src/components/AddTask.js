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
        <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} onKeyDown={(e) => checkKey(e)} />
        <button
          onClick={onAddTask}
          disable={todo.length >= 50 || todo.length <= 2}>
            Add your task!
        </button>
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
export default AddTask;