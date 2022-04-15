import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//Styled components
const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
  }

  const Container = styled.div `
  width: 82%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media ${devices.tablet} {
      width: 768px;
  }
  
  @media ${devices.desktop} {
      width: 1025px;
  }
  `

const CurrentStatus = styled.p`
font-size: 18px;
margin-block-end: 0;
margin-block-start: 0.7em;
margin-bottom: -2px;
`

const Description = styled.p`
font-size: 18px;
margin-block-end: 0;
margin-block-start: 0.7em;
margin-bottom: 17px;
`

const TaskCounter = () => {
const taskList = useSelector ((state) => state.tasks.items)
const remainingTodos = taskList.filter((todo) => todo.isDone === true)


if (taskList.length > 0 && taskList.length === 1) {
  return (
    <Container>
     <CurrentStatus>Current status:</CurrentStatus>

      <Description>You have {taskList.length} task to do, and you have completed {remainingTodos.length} of them.
      </Description>
    </Container>
  )
} else if (taskList.length > 1) {
  return (
    <Container>
         <CurrentStatus>Current status:</CurrentStatus>

      <Description>You have {taskList.length} tasks to do, and you have completed {remainingTodos.length} of them.
      </Description>
    </Container>
    )
  } else if (taskList.length === 0) {
return (
  <Container>
    <Description>
      Let's add something to your list!
    </Description>
  </Container>
  )
} 

}

export default TaskCounter