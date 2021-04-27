import React from 'react'
import styled from 'styled-components/macro'

const Tasks = styled.p `
  color: pink;
  font-size: 15px;
  text-align: right; 
  margin: 10px; 
`
const TotalTodos = ({tasks, completedTodos}) => {
  return (
    <div>
      <Tasks>Completed:   
        {completedTodos.length}/{tasks.length} 
      </Tasks>
    </div>
  )
}

export default TotalTodos