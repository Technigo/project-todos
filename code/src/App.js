import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoScreen } from 'components/ToDoScreen'
// import { CustomCheckbox } from 'components/CustomCheckbox'

import { tasklist } from 'reducers/tasklist'

const reducer = combineReducers({
  tasklist: tasklist.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
        <ToDoScreen />
        {/* <CustomCheckbox /> */}
    </Provider>
  )
}
