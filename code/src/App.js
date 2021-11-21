import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import styled from 'styled-components';


//import components 
//import AddTodo from './components/AddTodo';
import Header from './components/Header';

//import reducer that is required for the store
import todos from './reducers/todos';

// combine reducers
const reducer = combineReducers({
  todos: todos.reducer
});

//styling Main section with styled components
const Main = styled.section`
height: 100vh;
background-color: rgba(220,155, 160)
;
border: 4px solid black;
display:flex; 
flex-direction: column;
text-align:center; 

 @media (min-width: 768px) {
    margin-right: 50px;
    border-radius: 18px;
    direction: flex; 
    flex-direction: row; 
   
    margin-right: 65px; 
    margin-left: 65px;
    
  }
  @media (min-width: 1366px) {
    margin-right: 95px;
  }  
`


const store = configureStore({
  reducer
});
export const App = () => {
  return (
   <Provider store={store}>
          <Main> 
              <Header/>   
          </Main>
		</Provider>
  );
  };  



