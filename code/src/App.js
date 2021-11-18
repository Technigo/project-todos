import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'
//import { Routes, Route, BrowserRouter } from 'react-router-dom';


//import components
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import StarterPage from './components/StarterPage'
import DateTasks from './components/DateTasks'

//a reducer required for the store
import todos from './reducers/todos'

// This will combine all reducers, combineReducers is a method which takes an object
const reducer = combineReducers({
  todos: todos.reducer
})

//use the single reducer to create a Store
const store = configureStore({ reducer })

// styling
const Main = styled.section`
  background-image: url(./assets/blue-grid.png);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
	background-size: cover;
  background-position: center;
  display: flex;

`
const TaskContainer = styled.div`
  width: 80%;
  max-width: 350px;
  border: 4px solid black;
  box-shadow: 5px 5px 7px rgba(0,0,0,.25);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: white;

  
`

const TodoContainer =styled.div`
width: 100%;`

export const App = () => {

  return (
    // need to wrap everything in provider
    <Provider store={store}>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="Todo" element={<AddTodo />}  />
          <Route path="Todo" element={<TodoList />} />
          
        </Routes>

      </BrowserRouter>
        <StarterPage />*/}
        <Main>
          <TaskContainer>
            <DateTasks/>
            <TodoContainer>
              <AddTodo />
              <TodoList />
              
            </TodoContainer>
          
          </TaskContainer> 
        </Main>
        

    </Provider>

  )
}
