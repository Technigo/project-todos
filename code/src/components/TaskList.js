import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {todoStore} from '../reducers/todoStore'
import { TaskItem } from './TaskItem'
import {SectionHeader} from './NewTask'

const StyledSection = styled.section`
  border-bottom: 3px solid white;
`
const StyledGrid = styled.section`
  width: ${props=>props.width}px;
  display: flex;
  flex-direction: ${props=>(props.width<500)?'column':'row'};
  align-items: center;
  justify-content: flex-start;
`


export const TaskList = () => {
  const allTasks = useSelector((state)=>state.todoStore.todos)
  const theWidth = useSelector((state)=>state.sizes.screenSize.size)
  const dispatch = useDispatch()


  const handleClear = () => {
    dispatch(todoStore.actions.clearAll())
  }

  return (
    <StyledSection>
      <SectionHeader width={theWidth}>Todo List</SectionHeader>
      <StyledGrid width={theWidth}>
      {allTasks.map((task)=>(
        <TaskItem todo={task} />
      ))}
      </StyledGrid>
      <button onClick={handleClear}>Clear All</button>
    </StyledSection>
  )
}
// Clear all