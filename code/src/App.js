import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import filters from './reducers/FilterSlice'
import Filter from 'components/Header/Filter'
import HeaderContainer from 'components/Header/HeaderContainer'


const reducer = combineReducers({
  tasks: tasksReducer,
  filters
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
    <Provider store={store}>
      <HeaderContainer/>
      <Filter />
    </Provider>
    </div>
  )
}
