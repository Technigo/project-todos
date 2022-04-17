import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import  { FormAndList }  from 'components/Form.js'
import  Background2  from 'components/Background.js'
import Bunny from 'components/Bunny.js'

import { tasks } from 'reducers/tasks'
// import { TaskList } from 'components/TaskList'
import { Sort } from 'components/Sort'

import styled from 'styled-components'

import ScriptTag from 'react-script-tag'


const ContentWrapper = styled.main`
width: 100%;
position: relative;
margin: auto; 
z-index: 100;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`



const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    
    <Provider store={store}>
      <Background2 />

      <Bunny />

      <ContentWrapper>
     {/* <TaskList />  */}
      <FormAndList />

      {/* <Sort /> */}

    </ContentWrapper>
    
 
    </Provider>

    
  )
}
