import React from 'react'
import { useSelector } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import { TodoInput } from './TodoInput'
import { TodoItem } from 'components/TodoItem'
import { TodoSummary } from './TodoSummary'
import { RemoveAllButton } from './RemoveAllButton'
import moment from 'moment'


export const TodoList = () => {

  //useSelector takes the store(that has been made available by the provider)
  const list = useSelector((store) => store.todoStore.list)
  const rightNow = moment().format('HH:mm | D/M')

  return (
    <section className="todo-container">
      <header>
        <div className="header-content">
          <h1>todos</h1>
            <p className="todo-time">{rightNow}</p>
        </div>
      </header>
      <div className="todo-input">
        <TodoInput />
      </div>

      <div className="todo">
        {list.items.map((item, index) => (
          <div>
            <TodoItem item={item} itemIndex={index} />
          </div>
        ))}
      </div>

      <footer>
        <TodoSummary />
        <RemoveAllButton />
      </footer>
    </section>
  )
}



