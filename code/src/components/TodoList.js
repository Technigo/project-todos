import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { TodoSummary } from './TodoSummary'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faCheck } from '@fortawesome/free-solid-svg-icons'

export const TodoList = () => {
  const items = useSelector(store => store.todos.items)

  return (
    <TodoContainer>
      <TitleContainer>
        <IconContainer><FontAwesomeIcon icon={faListUl} /></IconContainer>
        <Title>
          B. Productive <FontAwesomeIcon icon={faCheck} />
        </Title>
      </TitleContainer>
      <TodoInput />
      <TodoListing>
        {items.map((task, index) => (
          <TodoItem key={index} task={task} itemIndex={index}></TodoItem>
        ))}
      </TodoListing>

      <TodoSummary />
      <DateToday>
        {moment().format('ddd')} {moment().format("MMM Do")}
      </DateToday>
    </TodoContainer>
  )
}

const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
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

const Title = styled.h1`
  width: 75%;
  height: 40px;
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px;
  background: #ece4cd;
  color: #994c2e;
  font-family: 'Playfair Display';
  font-size: 1.8em;
  text-align: center;
`

const TodoListing = styled.section`
  flex: 1;
  width: 85%;
  margin: 15px auto;
  padding: 5px 10px;
  border-radius: 10px;
  background: #ece4cd;
`

const DateToday = styled.p`
  width: 75%;
  margin: 0;
  padding: 5px 10px;
  font-size: 1em;
`