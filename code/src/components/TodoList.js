import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoListWrapper = styled.section`
  width:80%;
  display:flex;
  align-items:center;
  justify-content: space-between;
  border:1px solid red;
`

const TodoListBox = styled.div`
  width:100%
  border: 1px solid black;
 
`

const TextDescription = styled.p`
  margin:0px;
  border-bottom: double #5c5756;
  color:#363232;
  font-family: 'Shadows Into Light', cursive;
  font-size:20px;
  width:70%;
`
const TodoCheckBox = styled.input`

`
const DeleteButton = styled.button`
  
`

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  //when I want to reach for something= useSelector and the way to it store=handbag

  const dispatch = useDispatch()
  //When want to use/collect a method 

  return (
    <TodoListWrapper> 
      {items.map(todo => (
        <TodoListBox key={todo.id}>
          
          <TodoCheckBox
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id)) }
          />
          <TextDescription>{todo.description}</TextDescription>
          <DeleteButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            Delete
          </DeleteButton>
        </TodoListBox>
      ))}
    </TodoListWrapper>
  )
}

export default TodoList