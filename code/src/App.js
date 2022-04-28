import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'

import  { FormAndList }  from 'components/TodoApp.js'
import { ContentWrapper } from 'components/StyleComponents'

import  Background2  from 'components/Background.js'
import Counter from 'components/Counter.js'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    
    <Provider store={store}>
      <Background2 />

      <ContentWrapper>
      <FormAndList />
      <Counter />
      </ContentWrapper>
    
 
    </Provider>

    
  )
}
