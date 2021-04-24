import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import todos from 'reducers/todos'
import Todo from './Todo'
import EmptyTodoList from './EmptyTodo'

const TodolistWrapper = styled.div``

const Todos = styled.div``

const Footer = styled.div`
  padding: 0 30px;
  background-color: #999;
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  margin: auto;

  @media (min-width: 1024px){
    width: 700px;
    justify-content: space-evenly;
  }
`
const Button = styled.button`
  background-color: #FFF;
  border: none;
  border-radius: 20px;
  padding: 7px 13px;
  margin: 14px 10px;
  font-weight: bold;

  :active {
    background-color: yellow;
  }
  @media (min-width: 767px){
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 40px;
    margin: 20px 30px;
  }
  @media (min-width: 1024px){
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 40px;
    margin: 25px 0;
  }
`

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)

  const dispatch = useDispatch()

  const noTasks = tasks.length <= 0

  return ( 
    <>
      {!noTasks ? (
        <TodolistWrapper>
          <Todos>
            {tasks.map((tasks, index) => (
              <Todo 
                key={index}
                itemIndex={index}
              />
            ))}
          </Todos>
          <Footer>
            <ButtonsContainer>
              <Button onClick={() => dispatch(todos.actions.checkTodos())}>
                Check all
              </Button>
              <Button onClick={() => dispatch(todos.actions.removeChecked())}>
                Delete checked
              </Button>
            </ButtonsContainer>
          </Footer>
        </TodolistWrapper>
        ) : (
        <EmptyTodoList />
      )}
    </>
  )
}

export default TodoList
