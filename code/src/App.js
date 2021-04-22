import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { todos } from './reducers/todos';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { AddBtn } from './components/AddBtn';
import { AddTodo } from './components/AddTodo';
import { Counter } from './components/Counter';
import { ClearCompletedBtn } from 'components/ClearCompletedBtn';
import { CompletedItems } from 'components/CompletedItems';

const Container = styled.div`
  position: relative;
  height: auto;
  background-color: black;
  @media (min-width: 1280px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const [addView, setAddView] = useState(false);

  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Counter />
        {!addView && 
          <div>
            <TodoList />
            <CompletedItems />
          </div>
        }
        {addView && <AddTodo setAddView={setAddView} />}
        {!addView &&
          <ButtonContainer>
            <AddBtn setAddView={setAddView}/>
            <ClearCompletedBtn /> 
          </ButtonContainer>
        }
      </Container>
    </Provider>
  )
}
