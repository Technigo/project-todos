import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from 'reducers/todos';
import GlobalStyles from 'components/styles/Global';
import TodoList from 'components/TodoList';
import { ThemeProvider } from 'styled-components';
import { BackgroundDiv } from './components/styles/Flex.styled'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
    // cart: cart.reducer,
  // products: products.reducer
  })
  const store = configureStore({ reducer })

  const theme = {
    colors: {
      body: '#5A7869',
      darkgreen: '#1F593C',
      green: '#377958',
      lightgreen: '#9FDFBF'
    },
    tablet: '668px',
    desktop: '1025px'
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BackgroundDiv>
          <TodoList />
        </BackgroundDiv>
      </ThemeProvider>
    </Provider>
  );
}

