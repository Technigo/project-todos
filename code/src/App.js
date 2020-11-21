import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { todoTasks } from 'reducer/todoTasks'

import todoTasks from "./reducer/todoTasks"

//creating a single reducer from several reducers
export const reducer = combineReducers({
  todoTasks: todoTasks.reducer
})

//using the reducer to create a store
const store = configureStore({ reducer: reducer }) //can also be written as {reducer}

export const App = () => {
  return (
    //store is passed to provider as a prop
    <Provider store={store}>
      <div>
        Find me in src/app.js!
      </div>
    </Provider>
  )
}
