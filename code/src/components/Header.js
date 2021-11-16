import React from "react"
import DayJS from "react-dayjs"
import styled from "styled-components"
import { useSelector } from "react-redux"

import Greeting from "./Greeting"
import CompleteAll from "./CompleteAll"

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 150px;
`

const CompletedTaskText = styled.p`
  color: red;
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
        <DayJS format="YYYY-MM-DD" />
        <DayJS format="HH:mm" />
      </DateContainer>
      <CompletedTaskText>
        {completedTasks} / {numberOfTasks} tasks completed
      </CompletedTaskText>
      <CompleteAll />
    </>
  )
}

export default Header
