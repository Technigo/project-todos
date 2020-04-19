import React from 'react'
import moment from 'moment'

import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import styled from 'styled-components'


export const Header = () => {

  const dispatch = useDispatch()

  const handleClearList = () => {
    dispatch(
      tasks.actions.removeAllTasks()
      )
  }

  return(
    <Container>
      <Text>
      Today is {moment().format("MMMM Do, Y")}
      </Text>
      <h1>My To do app</h1>

      <button onClick={handleClearList}>CLEAR</button>

    </Container>
  )
}

// Clear all todos in list

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #387adf;
  padding: 20px;
  color: white;
  font-weight: 700;
`;

const Text = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #EFEBE9;
  margin: 0;
`;

