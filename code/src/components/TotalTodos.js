import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Image = styled.img`
  height: 200px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: tomato;
  color: white;
  font-size: 24px;
`

export const TotalTodos = () => {
  const totalTodos = useSelector((store) => store.tasks.items.length)

return (
  <Container>
    <Image src="https://www.svgrepo.com/show/263286/frog.svg" alt="image toad"/>
    <div>toado list</div>
    <p>{totalTodos} total toados!</p>
  </Container>
)
}