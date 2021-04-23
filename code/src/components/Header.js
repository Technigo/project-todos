import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import { useSelector } from "react-redux"

const HeaderContainer = styled.header`
  background-image: url("/assets/paper-4112063_640.jpg"); 
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  font-size: 2.5rem;
  font-family: Rock Salt;

  mark {
    font-weight: bolder;
    background: linear-gradient(104deg, rgba(130, 255, 173,0) 0.9%, rgba(130, 255, 173,1.25) 2.4%, rgba(130, 255, 173,0.5) 5.8%, rgba(130, 255, 173,0.1) 93%, rgba(130, 255, 173,0.7) 96%, rgba(130, 255, 1732,0) 98%), linear-gradient(183deg, rgba(130, 255, 173,0) 0%, rgba(130, 255, 173,0.3) 7.9%, rgba(130, 255, 173,0) 15%);
    border-radius: 7.5px;
    }
`

const Date = styled.div`
  font-size: 3rem;
  margin-top: 3rem;
  font-family: Reenie Beanie;
`

const TaskCount = styled.div`
  font-size 1.4rem;
  margin: 1rem 0 2rem 0;
  letter-spacing: 0.1rem;
  width: 16rem;
  text-align: center;
`

const Header = () => {
  const tasks = useSelector((state) => state.todos.tasks)
  const completedTasks = tasks.filter(loneTask => loneTask.isComplete)

  return (
    <HeaderContainer>
      <mark>
        To Do's
      </mark>
      <Date>{dayjs().format('dddd D MMM YYYY')}</Date>
      <TaskCount>Tasks completed: {completedTasks.length} of {tasks.length}</TaskCount>
    </HeaderContainer>
  )
}

export default Header