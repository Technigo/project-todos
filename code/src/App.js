import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components/macro'
import { tasks } from './reducers/tasks'

import Todos from './components/Todos'

const StyledContainer = styled.div`
background-color: var(--background-color);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100vh;`

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <StyledContainer>
        <Todos />
      </StyledContainer>
    </Provider>
  );
}
