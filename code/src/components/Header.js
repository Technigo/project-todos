import React from 'react'
// import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background-color: grey;
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px auto;
`
const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`
const Text = styled.p`
  margin: 0;
`
const Button = styled.button`
  background-color: blue;
  color: white;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Title>Todo</Title>
        <Text>Today</Text>
      </div>
      <div>
        <Text>number of tasks</Text>
        <Button>clear all</Button>
      </div>
    </HeaderWrapper>
  )
}
