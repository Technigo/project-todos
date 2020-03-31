import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import filters from './reducers/FilterSlice'
import Filter from 'components/Filter'
import AddTask from 'components/AddTask'
import FilterButton from 'components/FilterButton'
import { Filters }  from 'reducers/FilterSlice'

const reducer = combineReducers({
  tasks: tasksReducer,
  filters
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
    <Provider store={store}>
      <AddTask />
      <FilterButton filter={ Filters.SHOW_ALL }/>
      <FilterButton filter={ Filters.SHOW_COMPLETED }/>
      <FilterButton filter={ Filters.SHOW_ACTIVE }/>
      <Filter />
    </Provider>
    </div>
  )
}
