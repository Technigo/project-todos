import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import { todos } from './reducers/todos';
import { TodoList } from './components/TodoList';
//import { AddTodoForm } from './components/AddTodoForm';
import { SingleTodoPage } from './components/SingleTodoPage';

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    // Can't use useDispatch / useSelector outside of Provider
    
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
         
          <Route exact path="/todo/:id">
            <SingleTodoPage />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <AddTodoForm></AddTodoForm>
      <TodoList /> */}
    </Provider>
  )
};
