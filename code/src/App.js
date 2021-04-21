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
import { ClearAllBtn } from 'components/ClearAllBtn';
import { CompletedItems } from 'components/CompletedItems';

const Container = styled.div`
  position: relative;
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
            <AddBtn setAddView={setAddView}/>
            <ClearAllBtn />
          </div>
        }
        {addView && <AddTodo setAddView={setAddView} />}
        <CompletedItems />
      </Container>
    </Provider>
  )
}
