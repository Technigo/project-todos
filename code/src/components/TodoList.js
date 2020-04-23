import React from 'react'
import { useSelector } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import { TodoInput } from './TodoInput'
import { TodoItem } from 'components/TodoItem'
import { TodoSummary } from './TodoSummary'



export const TodoList = () => {

  //useSelector takes the store(that has been made available by the provider)
  const list = useSelector((store) => store.todoStore.list)

  return (
    <section>
      <div>
      <TodoInput />
      </div>
      {list.items.map((item, index) => (
        <div>
        <TodoItem item={item} itemIndex={index} />
        </div>
        ))}
      <TodoSummary />
      
    </section>
  )
}



