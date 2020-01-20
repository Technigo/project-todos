import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'



export const TaskSummary = () => {
  const items = useSelector(state => state.tasks.items)
  const leftTodo = items.filter(item => !item.complete)
  const totalTodo = items.length

  const [showLeftTodo, setShowLeftTodo] = useState(false)

  return (
    <SummaryWrapper>
      <Input>
        I have {leftTodo.length}/{totalTodo} thing{leftTodo.length === 1 ? ! "" : "s"} left to do ⏱️
      </Input>

      {showLeftTodo && (
        <ul>
          {leftTodo.map(items => (
            <li key={items.id}>{items.name}</li>
          ))}
        </ul>
      )}
    </SummaryWrapper>
  )
}

const SummaryWrapper = styled.text`
display: flex;
justify-content: center; 
`


const Input = styled.text`
color: #3e3e3e;
margin-top: 30px; 
font-size: 25px; 
`
