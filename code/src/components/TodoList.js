import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { List } from 'components/styles'


export const TodoList = () => {
  const todoItems = useSelector(state => state.todoList.items)
  console.log(todoItems)
  return (
    <List>
      {todoItems.slice().sort((a, b) => a.complete - b.complete).map(item => (<TodoItem key={item.id} item={item} />))}
    </List>
  )
}