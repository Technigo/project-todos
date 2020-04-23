import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const SummerySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: DeepPink;
  width: 5vw;
  height: 5vw;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; 
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`

export const ShowSummery = () => {
  const items = useSelector((store) => store.todo.todoListItems)
  const numDone = items.items.filter(item => item.done).length;

  return (
      <SummerySection>
        {numDone}/{items.items.length}
      </SummerySection>
  )
}