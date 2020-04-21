import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ToDos } from 'components/ToDos'
import { AddDos } from 'components/AddDos'
import { Provider } from 'react-redux'

import { inputDos } from 'reducers/inputDOs'
import { toDoList } from 'reducers/toDoList'

const reducer = combineReducers({
  inputDos: inputDos.reducer,
  toDoList: toDoList.reducer

})

const store = configureStore({ reducer })


export const App = () => (
  <Provider store={store}>
    <AddDos />
    <ToDos />
  </Provider>

)
