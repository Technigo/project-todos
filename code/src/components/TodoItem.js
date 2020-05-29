import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../library/Button'
import { todos } from '../reducers/reducer'


export const TodoItem = ({ itemIndex }) => {

  const todo = useSelector((store) => store.todos.list.items[itemIndex])
  const dispatch = useDispatch()


  const removeTodo = event => {
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
    <TodoContainer>
      <Input 
        type="checkbox"
        checked={todo.complete ? 'checked' : ''}
        onChange={handleCheckboxClick}
      ></Input>
      <Task>{todo.text}</Task>
      <Button onClick={removeTodo}>Remove</Button>
    </TodoContainer>    

  )

}

const TodoContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  width: 80%;
`

const Input = styled.input`
  color: pink;
`

const Task = styled.h3`
  font-family: "Helvetica";
  font-size: 22px;
`