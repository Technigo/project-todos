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
        <div className='header-wrapper'>
          <div className='header'>
            <h2>Todo</h2>
            <ShowDate />
          </div>
          <TodoSummery />
        </div>

        <TodoList />

      </main>
    </Provider>
  )
}