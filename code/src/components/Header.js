import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { formatDistance, formatWithOptions } from 'date-fns'
import { eo } from 'date-fns/locale'

const dateToString = formatWithOptions({ locale: eo }, 'D MMMM YYYY')

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items)
  const numberOfTasks = tasks.lenght
  const completedTasks = tasks.filter((task) => task.isComplete).length

  return (
    <HeaderContainer>
      <h1>TO DO</h1>
      <CounterContainer>
        <h4>
          {' '}
          {completedTasks} / {numberOfTasks} tasks completed
          {/* <p>{formatWithOptions}(Date.now(), {
              addSuffix: true
            })</p> */}
        </h4>
      </CounterContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  justify-content: column;
  margin: 0px 0px 0px 20%;

  h1 {
    font-size: 30px;
    color: #c77700;
  }

  h4 {
    justify-content: end;
  }
`

const CounterContainer = styled.div``
