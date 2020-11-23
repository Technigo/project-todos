import React from 'react'

import styled from 'styled-components'

const TaskContainer = styled.div`
  padding: 10px;
`

export const Task = ({id, text, complete}) => {
  return (
    <TaskContainer>
      <input
        type="radio"
        name="task"
        id={id}
      />
      <label
        className="task-text"
        htmlFor={id}
      >
        {text}
      </label>
    </TaskContainer>
  )
}