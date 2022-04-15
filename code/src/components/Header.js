import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items)
  const numberOfTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.isComplete).length

  return (
    <HeaderContainer>
      <h1>ADD TO DO</h1>
      <CounterContainer>
        <h6>{moment().format('dddd, Do MMMM')}</h6>
        <h6>
          ToDos:{numberOfTasks} | Done:{completedTasks}
        </h6>
      </CounterContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  justify-content: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-size: 25px;
    color: #c77700;
  }
`

const CounterContainer = styled.div`
  /* flex-direction: column;
  justify-content: space-evenly; */

  h6 {
    margin: 0px;
    padding: 2px;
    color: #c77700;
    text-align: right;
  }
`
