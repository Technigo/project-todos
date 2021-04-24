import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.p`
  font-size: 25px;
  text-align: center;
  margin: 60px 40px 0 40px;
  color: #032640;
`

const NoData = () => {
  const items = useSelector((state) => state.todos.items)

  return (
    <>
    {!items.length && (
      <Container>
        <Text>No tasks here yet, add new tasks or just relax!</Text>
      </Container>
    )}
    </>
  )
}
export default NoData