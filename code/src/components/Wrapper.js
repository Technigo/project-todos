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
      <Rapper>
        <Header />
        <AddTask />
        <Headline>
          <h2>YOUR TO DOS</h2>
        </Headline>
        <Container>
          <ToDoList />
          <ClearBtn />
        </Container>
      </Rapper>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #A2CCDA;
  margin: 0px;
  padding: 0px;
}
`
const Headline = styled.h2`
  font-size: 10px;
  margin: 0px;
  color: #c77700;
`

const Container = styled.div`
  background-color: #ffe588;

  height: auto;
  margin: auto;
  /* margin: 10px 20%; */
  border: solid black 4px;
`
const Rapper = styled.div`
  width: 50%;
  margin: auto;
`

export default Wrapper
