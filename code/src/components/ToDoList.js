import React from 'react'
import styled, { css } from 'styled-components'

const Text = styled.h1`
  background-color: lightyellow;

  &:hover {
    color: grey;
  }

  ${props => props.example && css`
  background-color: example;`}
`


export const ToDoList = () => {

  return (
    <Text>ToDoList will be here</Text>
  )
}