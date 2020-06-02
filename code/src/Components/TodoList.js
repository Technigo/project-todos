import React from 'react'
import { TodoItems } from './TodoItems'
import { TodoInput } from './TodoInput'
import { TodoSummary } from './TodoSummary'
import { useSelector } from 'react-redux'
import { Title } from '../lib/Text'
import { Section } from '../lib/Section'

export const TodoList = () => {
  const list = useSelector(store => store.todos.list);

  return (
    <Section>
      <Title>WHAT TO DO?</Title>
      <TodoInput />
      {list.items.map((item, index) => (
      <TodoItems itemIndex = {index} />))}
      <TodoSummary />
    </Section>
  ) 
};