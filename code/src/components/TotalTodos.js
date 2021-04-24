import React from 'react'
import styled from 'styled-components'

const Tasks = styled.p `
  color: pink;
  font-size: 15px;
  text-align: right; 
  margin: 10px; 
  padding: 0 5px 20px 0;
`
const TotalTodos = ({tasks, completedTodos}) => {
  return (
    <div>
      <Tasks>Completed: {completedTodos.length}/{tasks.length} </Tasks>
    </div>
  )
}

export default TotalTodos