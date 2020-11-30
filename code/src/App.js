import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { Header } from './components/Header'
import { AddNewTodo } from './components/AddNewTodo'
import { todos } from 'reducers/todos'
import { TodoList } from './components/TodoList'  
import { Counter } from './components/Counter' 

const reducer = combineReducers({todos: todos.reducer})

/* These lines of code is a setup to store the added To-Do's locally,
so that they don't disapear every time the page is updated.
The variable persistedStateJSON will check if anything's saved in the local storage
by the method getItem. The data being saved locally can be named anything you'd like,
in this project it's named savedData. If savedData is found, we need to parse it,
this parsed version is assigned to persistedState and will work as our initialState */
const persistedStateJSON = localStorage.getItem("savedData");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

/*  the 'original' setup for the reducer
( const store = configureStore({ reducer }); )
is being changed to the line of code below */
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem("savedData", JSON.stringify(store.getState()));
});

export const App = () => {

  return (
    /* all components called within the Provider below will have access
    to the data stored in savedData */
    <Provider store={store}> 
        <Wrapper>
          <Header />
            <AddNewTodo />
              <TodoList />  
                <Counter />
        </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: auto;
`

