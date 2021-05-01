import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FlipMove from 'react-flip-move'
import styled from 'styled-components/macro'

import todos from '../reducers/todos'

const ListView = styled.div `
  border-bottom: 1px solid lightgray; 
  width: 100%;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  padding: 10px 0; 
  font-size: 15px; 
  align-items: center; 
  word-break: break-all;
`
const DescriptionTask = styled.p `
  text-align: center; 
  align-items: center; 
  margin: 0 8px 0 17px; 
`
const DateStamp = styled.p `
  font-size: 10px; 
  color: pink; 
  padding-top: 5px; 
`
const Button = styled.button `
  margin-right: 10px; 
  border: none;
  outline: none;
  background: none;
  color: gray; 
`

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch()  
  const date = new Date().toLocaleDateString()
  
  return (
    <>
     {tasks.map(todo => (
       <FlipMove 
         duration={250} 
         easing="ease-out"
       >
         <ListView key={todo.id}>
           <input
             type='checkbox'
             checked={todo.isComplete}
             onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
           /> 
           <DescriptionTask>
             {todo.description}
              <DateStamp>created {date}</DateStamp>
           </DescriptionTask>
           <Button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
             <span
               role="img"
               aria-label="delete"
             >
               x
             </span> 
           </Button>
         </ListView>
       </FlipMove>
     ))}
    </>
  )
}

export default TodoList