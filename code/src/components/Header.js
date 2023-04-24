import React from 'react';
import styled from 'styled-components';
import { tasks } from 'reducers/tasks';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteAllButton } from './styled_components/buttons'
import { LeftTodo } from './styled_components/typography'

export const Header = () => {
  const totalTask = useSelector((store) => store.tasks.items.length)
  const completedTasks = useSelector((store) => store.tasks.completedCount)
  const tasksleft = totalTask - completedTasks
  const dispatch = useDispatch()
  const DeleteAllToDos = () => {
    dispatch(tasks.actions.deleteAllTasks())
  }
  console.log(completedTasks)
  return (
    <HeaderSection>
      <h1>To do list!</h1>
      <HeaderDetails>
        <p>{completedTasks}/{totalTask} Completed</p>
        <LeftTodo>To do: {tasksleft}</LeftTodo>
      </HeaderDetails>
      <DeleteAllButton type="button" onClick={DeleteAllToDos}>Delete all!</DeleteAllButton>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
display: flex;
flex-direction: column;
gap: 5px;
padding: 4%;
align-items: center;
`
const HeaderDetails = styled.div`
  text-align: center
`