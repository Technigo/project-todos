import React from 'react'
import styled from 'styled-components'

export const Task = ({ item }) => {
  return(
  <TaskContainer>
   <TextWrapper>
    <TaskText>{item.text}</TaskText>
    </TextWrapper>
  </TaskContainer>
  )
}

const TaskContainer = styled.section`
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin: 20px;
`
const TextWrapper = styled.div`
  background-color: #fdc1c5;
  border: 1px solid grey;
  border-radius: 5px;
  width: auto;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  
`
const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
`