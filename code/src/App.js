import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TodoList from 'components/TodoList';
import todos from 'reducers/todos';
import { Container, Wrapper } from 'components/ContainerStyled';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <Wrapper>
        <Container>
          <TodoList />
        </Container>
      </Wrapper>
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer
