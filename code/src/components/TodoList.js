import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoSummary } from '../components/TodoSummary'
import { useSelector } from 'react-redux'
import { ToggleButton } from '../components/ToggleButton'
import { EmptyList } from '../components/EmptyList'
import '../styling/todo-list.css'
import '../styling/todo-item.css'

export const TodoList = () => {

  // get list information from this list from the store
  const list = useSelector(store => store.todos.list)

  const noItems = list.items.length <= 0

  return (
    <div>
      <ToggleButton />
      {!noItems ? (
        <section className="todo-list">

          {
            list.items.map((item, index) => (
              <TodoItem key={index} itemIndex={index}></TodoItem>
            ))
          }
          < TodoSummary />
        </section>
      ) : (
          <EmptyList />
        )}
    </div>
  )
}