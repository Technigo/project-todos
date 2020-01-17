import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Header = () => {

  const dispatch = useDispatch()

  // To get all tasks
  const allTasks = useSelector(store => store.tasks.items)

  // To get tasks with completed status true
  const completedTasks = allTasks.filter(task => task.completed === true)

  // Function to clear all todos
  const handleClearTasks = () => {
    dispatch(tasks.actions.removeAll())
  }

  return (

    <WrapperHeader>
      <WrapperLeft>
        <Heading>My todos</Heading>
        <Text>{moment().format("MMMM Do")}</Text>
      </WrapperLeft>
      <WrapperRight>
        <Text>{completedTasks.length}/{allTasks.length} done</Text>
        <ClearButton onClick={handleClearTasks}>Clear all</ClearButton>
      </WrapperRight>
    </WrapperHeader>

  )

}

const WrapperHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1E2D2F;
  padding: 20px;
  font-weight: 700;
`
const WrapperLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
`
const WrapperRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
`
const Heading = styled.p`
  font-size: 20px;
  margin: 0;
  color: #EFEBE9;
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #EFEBE9;
  margin: 0;
`
const ClearButton = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  font-family: 'Ubuntu', sans-serif;
  background: #C98850;
  color: #EFEBE9;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  padding: 5px;
  border-radius: 7px;
  border: 2px solid #EFEBE9;
  // border: none;
  &:hover {
    cursor: pointer;
  }
`