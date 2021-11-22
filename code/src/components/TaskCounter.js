import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Count = styled.p`
  font-size: 14px;
  font-weight: bolder;
  text-align: right;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: antiquewhite;
}
`

const TaskCounter = () => {
  const taskCounter = useSelector((state) =>
    state.todo.items.filter((item) => item.isComplete === false)
  )
  return <Count> {taskCounter.length} todos left</Count>
}

export default TaskCounter
