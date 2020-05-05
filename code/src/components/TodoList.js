import React from 'react'
import { TodoItem } from './TodoItem'
import { TodoSummary } from './TodoSummary'
import { TodoInput } from './TodoInput'
import { useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { useDispatch } from 'react-redux'
import { Button, ClearButton } from '../lib/Button'
import { Section } from '../lib/Container'
import styled from 'styled-components'

export const TodoList = () => {
  const list = useSelector(store => store.todos.list)
  const dispatch = useDispatch()

  const removeAll = () => {
    dispatch(todos.actions.removeAll())
  }

  var now = new Date
  var date = now.toLocaleDateString('en-US', {weekday:'short'})

  return (
    <Section className='todo-list'>
      <SectionFormat>
        <article>
          <PageTitle>Todo</PageTitle>
          <DateText>{date}</DateText>
        </article>
        <article>
          <TodoSummary />
          <ClearButton onClick={removeAll}>Clear</ClearButton>
        </article>
      </SectionFormat>
      <TodoInput />
      {list.items.map((item, index) => (
      <TodoItem key={index} itemIndex={index}></TodoItem>
      ))}
    </Section>
  )
}

const SectionFormat = styled.section `
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #EBEAEA;
`

const PageTitle = styled.h2 `
  font-weight: normal;
  margin: 20px 10px 5px 15px;
  font-size: 22px;
`

const DateText = styled.p `
  margin: 0px 10px 25px 15px; 
  color: grey;
`