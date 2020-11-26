import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: tomato;
color: white;
font-size: 24px;
`
const Title = styled.div`

`
const Total = styled.p`

`

export const TotalTodos = () => {
  const totalTodos = useSelector((store) => store.tasks.items.length)

return (
  <Container>
    <Title>TODO LIST</Title>
    <Total>Todos: {totalTodos}</Total>
  </Container>
)
}