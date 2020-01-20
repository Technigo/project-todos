import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { todo } from 'reducers/todo'

import { AddItemForm } from 'components/AddItemForm'
import { ItemList } from 'components/ItemList'
import { Header } from 'components/Header'
import { TodoSummary } from 'components/TodoSummary'
import { ClearButton } from 'components/ClearButton'

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

//same code in every project

export const App = () => (
  
  <Provider store={store}>
    <section>
      <Header />
      <AddItemForm />
      <ItemList />
    <footer>  
      <TodoSummary />
      <ClearButton />
    </footer>    
    </section>
  </Provider>
)
