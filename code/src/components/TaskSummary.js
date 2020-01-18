import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TaskSummary = () => {
  const items = useSelector(state => state.tasks.items)
  const leftTodo = items.filter(item => item.complete)
  //where does item come from and what should I change it into? 

  const [showLeftTodo, setShowLeftTodo] = useState(false)


  return (
    <SummaryWrapper>
      <Input> I have {leftTodo.lenght} thing{leftTodo.lenght === 1 ? ! "" : "s"} left to do.
        <span
          type='button'
          onClick={() => setShowLeftTodo(!showLeftTodo)}>
          📚
        </span>
      </Input>

      {showLeftTodo && (
        <ul>
          {leftTodo.map(item => (
            <li key={item.id}>{item.name}</li>
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
color: dark-grey;
margin-top: 30px; 
font-size: 25px; 
`
