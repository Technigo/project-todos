import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {todoStore} from '../reducers/todoStore'
import { TaskItem } from './TaskItem'
import {StyledSection, SectionHeader} from './NewTask'

const StyledGrid = styled.section`
  width: ${props=>props.width}px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props=>(props.width<500)?'column':'row'};
  align-items: center;
  justify-content: flex-start;
`
const ClearButton = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #222;
  margin: 16px 0;
`



export const TaskList = () => {
  const allTasks = useSelector((state)=>state.todoStore.todos)
  const theWidth = useSelector((state)=>state.size.screenSize)
  const dispatch = useDispatch()
  const [filteredTasks, setFilteredTasks] = useState(allTasks)



  const handleClear = () => {
    dispatch(todoStore.actions.clearAll())
  }
  const handleFilter = () => {
    if (filteredTasks.length === allTasks.length){
      setFilteredTasks(allTasks.filter((item)=>(!item.taskdone)))
    }
    else{
      setFilteredTasks(allTasks)
    }
    
    
  }
  return (
    <StyledSection>
      <SectionHeader width={theWidth}>Todo List</SectionHeader>
       <ClearButton onClick={handleFilter} >clear</ClearButton>
      <StyledGrid width={theWidth}>
      {allTasks.map((task)=>(
        <TaskItem todo={task} />
      ))}
      </StyledGrid>
      <ClearButton onClick={handleClear} >clear</ClearButton>
    </StyledSection>
  )
}
// Clear all