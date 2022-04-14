import React from 'react'
import styled from 'styled-components'

import tasks from '../reducers/tasks'

import Header from 'components/Header'
import ToDoList from 'components/ToDoList'
import AddTask from 'components/AddTask'
import ClearBtn from 'components/ClearBtn'
import { createGlobalStyle } from 'styled-components'

const Wrapper = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AddTask />
      <Container>
        <ToDoList />
        <ClearBtn />
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #A2CCDA;
}
`
const Container = styled.div`
  background-color: #ffe588;
  width: 400px;
  height: 600px;
  margin: 10px 20%;
  border: solid black 3px;
`

export default Wrapper
