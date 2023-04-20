import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todo'
import { TodoCounter } from 'components/TodoCounter'
import { Layout } from 'components/Layout'
import { GlobalStyle } from 'components/globalStyles'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <TodoCounter />
      </Layout>
    </Provider>
  );
}
