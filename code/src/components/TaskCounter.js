import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//Styled components
const Description = styled.p`
font-size: 18px;
margin-top: 2rem;
`


const TaskCounter = () => {
const taskList = useSelector ((state) => state.tasks.items)


if (taskList.length > 0 && taskList.length === 1) {
  return (
    <div>
      <Description>You have {taskList.length} task to do</Description>
    </div>
  )
} else if (taskList.length > 1) {
  return (
    <div>
      <Description>You have {taskList.length} tasks to do</Description>
    </div>
    )
  } else if (taskList.length === 0) {
return (
  <div>
    <Description>Let's add something to your list!</Description>
  </div>
  )
} 

}

export default TaskCounter