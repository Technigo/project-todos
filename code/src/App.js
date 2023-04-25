import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import todos from './reducers/todo';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalWrap } from './styles/SectionWrapper.styled';

// FYI: // A reducer is a pure function that takes the current state and an action,
// and returns a new state. combineReducers combines multiple reducers into a single
// reducer, delegating the responsibility of updating each state slice to the corresponding reducer.

export const App = () => {
  const reducer = combineReducers({
    // Before the return statement, create a reducer. Since it's handled
    // by the reduxtoolkit it's called combineReducers. It is a function.
    // combineReducers exposes all of our reducers from the slices to
    // the store in the provider. It creates a new object which is easily
    // consumed and meets all req for the configStore function. Processes
    // our reducer and spits out something that is suited for the configStore
    // function below.
    todos: todos.reducer
    // Provide/insert an object (todos) as an argument. Since the reducer
    // is a function, open parantheses and inside of them, open curly
    // brackets to indicate that this will be an object. This object will
    // have properties which we will populate. Those properties will be
    // the name of our redux store slices. "Undefined" until we have created
    // a slice (todos).
  });
  // configureStore creates the Redux store, passing the reducer object
  const store = configureStore({ reducer });

  // Subscribe to the store changes, and store the todo items in local storage
  store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todos.items)));
  return (
  // Inside our store provide our reducer.
  // A wrapper, Provider, for our application to be able to function with our
  // redux store. Set provider takes one prop which is our store.
    <Provider store={store}>
      <GlobalWrap>
        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </GlobalWrap>
    </Provider>
  )
}

// Outside of the shopping cart: user account. One slice for the user and
// another for a specific, eg shopping cart, third slice for coloured themes,
// layout etc. Rule of thumb: If it still is within the same domain as as data
// stored inside of one slice, then no problem. You can start of with one slice.
// If it doesn't function well with the other stuff, put them in another slice.