import React from "react"
import DayJS from "react-dayjs"
import styled from "styled-components"
import { useSelector } from "react-redux"

import Greeting from "./Greeting"

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 30px;
`

const CompletedTaskText = styled.p`
  color: #ffbe00;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = () => {
  const todos = useSelector((store) => store.todos.items)
  const numberOfTasks = todos.length
  const completedTasks = todos.filter((task) => task.isComplete).length

  return (
    <>
      <DateContainer>
        <Greeting />
        <DayJS format="D MMMM YYYY" />
        <DayJS format="HH:mm" />
      </DateContainer>
      <CompletedTaskText>
        {completedTasks} / {numberOfTasks} tasks completed
      </CompletedTaskText>
    </>
  )
}

export default Header
