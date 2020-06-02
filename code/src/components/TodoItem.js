import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemButton } from '../library/Button'
import { todos } from '../reducers/reducer'


export const TodoItem = ({ itemIndex }) => {

  const todo = useSelector((store) => store.todos.list.items[itemIndex])
  const dispatch = useDispatch()


  const removeTodo = event => {
    event.preventDefault()
    dispatch(
    todos.actions.removeTodo({ itemIndex })
    )
  }

  const handleCheckboxClick = (event) => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      complete: !todo.complete
      })
    )
  }
    
  return (
    <>
    <TodoContainer>
      <Input 
        type="checkbox"
        checked={todo.complete ? 'checked' : ''}
        onChange={handleCheckboxClick}
      ></Input>
      <Task>{todo.text}</Task>
      <RemoveItemButton onClick={removeTodo}>Remove</RemoveItemButton>
    </TodoContainer>    
    </>
  )

}

const TodoContainer = styled.div`
  margin: 0 5em;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const Input = styled.input`
  
`

const Task = styled.h5`
  font-family: "Helvetica";
  font-size: 16px;
`