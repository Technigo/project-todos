import React from 'react'
import {useDispatch } from 'react-redux'

import styled from 'styled-components/macro'

import todos from '../reducers/todos'

const Button = styled.button `
  background: pink;
  border-radius: 8px;
  color: black; 
  padding: 10px;
  margin: 10px; 
  width: 100px;
  text-align: center;  
  justify-content: center; 
  display:flex;
  border: none;
  outline: none;
  font-size: 10px; 
  cursor: pointer; 
`
const Footer = styled.div `
  display: flex; 
  justify-content: space-between;
  flex-direction: flex-end;
  margin-top: auto; 
`

const FooterAppButtons = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Footer>
        <Button onClick={() => dispatch(todos.actions.clearAllTodos())}>
          All completed 
        </Button>
        <Button onClick={() => dispatch(todos.actions.removeAllTodos())}> 
          Delete completed
        </Button>
      </Footer>
    </>
  )
}

export default FooterAppButtons