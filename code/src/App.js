/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { OuterWrapper, GlobalStyles, ContentWrapper } from 'StyledComponents/globalStyles';
import tasks from './reducers/tasks'

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Logo from './components/Logo'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <Provider store={store}>
          <Logo />
          <ContentWrapper>
            <AddTask />
            <TaskList />
          </ContentWrapper>
        </Provider>
      </OuterWrapper>
    </>
  )
}

