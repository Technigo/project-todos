import React from 'react'
import moment from 'moment'
import { TodoItem } from './TodoItem.js'
import { TodoInput } from './TodoInput.js'
import { TodoSummary } from './TodoSummary.js'
import { useSelector } from 'react-redux'
import { List } from 'lib/Form'

export const TodoList = () => {
const list = useSelector(store => store.todos.list)

  return (
  <List>
    <p>{moment().format('dddd Do MMM')}</p>
      <TodoSummary />
      <TodoInput />
      {list.items.map((item, index) => (
      <TodoItem itemIndex={index}></TodoItem>
      ))} 
  </List>
  )
};