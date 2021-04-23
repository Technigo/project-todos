import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ImBin2 } from 'react-icons/im'

import todos from '../reducers/todos'

const TodoListWrapper = styled.section`
  width:95%;
  @media (min-width:768px) {
    max-width: 500px;
  }
`

const TodoListBox = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-evenly;
  margin-top:15px;
`

const TextDescription = styled.p`
  margin:0px;
  border-bottom: double #5c5756;
  color:#363232;
  font-family: 'Shadows Into Light', cursive;
  font-size:20px;
  width:60%;
  word-wrap: break-word;
`
const TodoCheckBox = styled.input`
  cursor:pointer;
  height:20px;
  width: 20px;
`
const DeleteButton = styled.button`
  width:fit-content;
  font-family: 'Shadows Into Light', cursive;
  font-size:20px;
  background-color:#5c5756;
  color:#f9ac45;
  border:none;
  border-radius:5px;
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
            <ImBin2 />
          </DeleteButton>
        </TodoListBox>
      ))}
    </TodoListWrapper>
  )
}
export default TodoList