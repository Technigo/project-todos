import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import styled from 'styled-components'

const TodoList =() => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()
  
  return (
    <TodoListContainer>
      {items.map(todo => (
        <TodoItem key={todo.id}>
          <Checkbox
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
            />
            <p className='p'>{todo.description}</p>
            <RemoveButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            🗑 
            </RemoveButton>
        </TodoItem>
      ))}
    </TodoListContainer>
  )
}

export default TodoList

const TodoListContainer = styled.div`
border-radius: 5px;
min-height: 280px;
background: #112d32;
`
const TodoItem = styled.div`
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background: #88bdbc;
color: #ffffff;
margin: 3px;
`
const Checkbox = styled.input`
transform: scale(1.7);
margin: 10px;
cursor: pointer;

filter: invert(90%);
&:checked {
  
}
`
const RemoveButton = styled.button`
transform: scale(1.7);
background-color: #88bdbc;
color: #ffffff;
cursor: pointer;
border: none;
border-radius: 3px;
margin-right: 8px;
&:hover {
  color: #112d32;
}

`


