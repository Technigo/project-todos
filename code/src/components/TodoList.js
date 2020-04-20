import React from 'react'
import { useSelector } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import { TodoInput } from './TodoInput'
import { TodoItem } from 'components/TodoItem'


export const TodoList = () => {

  //useSelector takes the store(that has been made available by the provider)
  const list = useSelector(store => store.todoStore.list)
  
  return (
    <section>
      <TodoInput />
      {list.items.map((item, index) =>(
        <TodoItem itemIndex = {index}></TodoItem>))}
    </section>
  )
}



