import React from 'react'
import { useSelector } from 'react-redux'
import GOAL from 'assets/goal.svg'
import Styled from 'styled-components'

export const TaskList = () => {
  const tasks = useSelector((store) => {
    console.log(store)
    return store.tasks
  })

  return (
    <div className="TaskListOuterWrapper">
      <h1>01</h1>
      <h3>Important And Urgent</h3>
      <div className="TaskListInnerWrapper" />
      <img src={GOAL} alt="bild" height="100px" />
      <ul className="items">
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export const TaskListOuterWrapper = Styled.div`
height: 300px;
background-color: solid blue;
`;

