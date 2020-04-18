import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { TodoSummary } from './TodoSummary'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

export const TodoList = () => {
  const list = useSelector(store => store.todos.list)

  return (
    <TodoContainer>
      <TitleContainer>
        <IconContainer><FontAwesomeIcon icon={faListUl} /></IconContainer>
        <DateToday>
          TODOS / {moment().format('ddd')} {moment().format("MMM Do")}
        </DateToday>
      </TitleContainer>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}

      <TodoSummary />
    </TodoContainer>
  )
}

const TodoContainer = styled.section`
  height: 100vh;
`

const TitleContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding-top: 15px;
  width: 90%;
`

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #888d64;
  color: #fff;
  font-size: 1.8em;
`

const DateToday = styled.h1`
  width: 75%;
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px;
  background: #ece4cd;
  font-size: 1.5em;
`