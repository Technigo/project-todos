import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'
import { Container } from '../styling/GlobalStyles'

const FooterAndDeleteAll = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <DeleteAllButton
        onClick={() => dispatch(todos.actions.deleteAllTodos())}>
        Delete all
      </DeleteAllButton>
    </Container>
  )
}

// Local styling 
const DeleteAllButton = styled.button`
  margin-top: 20px;
  background-color: #4d8aff; 
  border: none;
  border-radius: 0.25em;
  width: 70px;
  height: 45px;
  color: whitesmoke;
  text-transform: uppercase;
`;

export default FooterAndDeleteAll