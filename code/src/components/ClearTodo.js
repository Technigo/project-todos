import React from 'react'
import styled from 'styled-components'

const ClearButton = styled.button`
  background-color: #92948d;
  color: #fff;
  border-radius: 25px; 
  height: 30px;
  border: 2px solid #717171;

  &:hover {
    background-color: #767676;
  }
`

const ClearTodo = () => {
  
  return (
    <div className='clear-todo'>
      <ClearButton>Clear All</ClearButton>
    </div>
  )
}

export default ClearTodo 