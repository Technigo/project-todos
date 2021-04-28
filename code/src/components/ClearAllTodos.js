import React from 'react'
import {useDispatch } from 'react-redux'

import styled from 'styled-components/macro'

import todos from '../reducers/todos'

const Button = styled.button `
  background: pink;
  border-radius: 8px;
  color: black; 
  padding: 8px;
  margin: 10px; 
  width: 100px;
  text-align: center;  
  justify-content: space-between; 
  flex-direction: flex-end;
  display:flex;
`
const FooterApp = styled.div `
  display: flex; 
  justify-content: space-between;
  flex-direction: flex-end;
  margin-top: auto; 
`

const ClearAllTodos = () => {
  const dispatch = useDispatch()

  return (
    <>
      <FooterApp>
        <Button onClick={() => dispatch(todos.actions.clearAllTodos())}>
        All completed 
        </Button>
        <Button  /* onClick={() => dispatch(todos.actions.removeAllTodos())}*/> 
          Delete all
        </Button>
      </FooterApp>
    </>
  )
}

export default ClearAllTodos