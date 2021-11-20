import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import styled from 'styled-components';


//import components 
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

//import reducer that is required for the store
import todos from './reducers/todos';

// this code is neede to combine all reducers
const reducer = combineReducers({
  todos: todos.reducer
});

//styling
const Main = styled.section`
height: 100vh;
background-color: rgba(220,155, 160)
;
border: 4px solid black;
display:flex; 
flex-direction: column;
`

const TaskContainer = styled.div`
  width: 80%;
  max-width: 375px;
  box-shadow: 5px 5px 7px rgba(0,0,0,.25);
  margin-right: 50px;
  margin-left: 50px;
  flex-direction: column;
  display:flex;
`


const store = configureStore({
  reducer
});
export const App = () => {
  return (
   <Provider store={store}>
          <Main> 
              <TaskContainer/>

              <Header/>         
              <AddTodo />
			        <TodoList/>
          </Main>
		</Provider>
  );
  };  



  //background-color: 