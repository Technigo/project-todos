import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'
//import { Routes, Route, BrowserRouter } from 'react-router-dom';


//import components
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import StarterPage from './components/StarterPage'

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
  width: 60%;
  max-width: 350px;
  border: 3px solid rgb(255, 192, 203);
  box-shadow: 5px 5px 7px rgba(0,0,0,.25);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: white;
`
const TitleContainer =styled.div`
  margin: 50px auto;
  text-align: center;
  background: white;
  padding: 5px;
  `
const Title = styled.h1`
  font-family: 'Special Elite', cursive;
  font-size: 30px;
  text-align: center;
  margin: 10px auto;`

const Date = styled.h2 `
  
  font-size: 20px;
  margin: 5px auto;  
`
const Tasks = styled.h3 `

font-size: 15px;  
margin: 5px auto;
`

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
            <TitleContainer>
            <Title> Your To-dos....</Title>
              <Date> 17/11/2021</Date>
              <Tasks>XX</Tasks>
            </TitleContainer>
            
            <AddTodo />
            <TodoList />
          </TaskContainer> 
        </Main>
        

    </Provider>

  )
}
