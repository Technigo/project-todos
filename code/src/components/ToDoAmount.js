import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'

const ToDoAmount = () => {
  const todos = useSelector((store) => store.todos.items);
  const amountToDo = todos.filter((singleToDo) => singleToDo.isComplete)

  return (
    <TaskAmount
      noTask={amountToDo.length <= 0 && todos.length <= 0}>
      <p>{amountToDo.length} of {todos.length} tasks completed</p>
    </TaskAmount>
  )
}

export default ToDoAmount

const TaskAmount = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;;
display: flex;
flex-direction: row-reverse;

  display: ${(props) => (props.noTask ? 'none' : 'flex')};

  p {
    padding-right: 2rem;
  }
`