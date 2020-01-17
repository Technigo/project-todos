import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Header = () => {

  const dispatch = useDispatch()

  // To get todays date
  let date = new Date()
  let day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })

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
        <Heading>Todo</Heading>
        <Text>{day} {month}</Text>
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
  background: #B0BBC0;
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
  color: #333;
`
const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #666;
  margin: 0;
`
const ClearButton = styled.button`
  background: #264653;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 300;
  padding: 5px;
  border-radius: 7px;
  border: none;
`