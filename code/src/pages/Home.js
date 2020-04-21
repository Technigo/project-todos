import React from 'react'
import { TodoInput } from 'components/TodoInput'
import { TodoList } from 'components/TodoList'
import { TodoSummery } from 'components/TodoSummery'
import { todos } from 'reducers/todos'
import { ShowDate } from 'components/ShowDate'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import 'index.css'

const reducer = combineReducers({ todos: todos.reducer })

const store = configureStore({ reducer })

export const Home = () => {
  return (
    <Provider store={store}>
      <main>

        <div className='header'>
          <ShowDate />
          <TodoSummery />
        </div>
        <div className='todo-list-wrapper'>
          <TodoInput />
          <TodoList />
        </div>

      </main>
    </Provider>
  )
}