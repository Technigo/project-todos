import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import styled from 'styled-components'

const AllTodoItems = () => {
  const todoItems = useSelector((store) => store.todolist)
  const [isChecked, setIsCheck] = useState(false)
  const dispatch = useDispatch()

  const checkedItemId = useSelector((state) => state.id)

  const handleCheck = () => {
    setIsCheck(true)

    dispatch(todoList.actions.handleChecked({ItemId: checkedItemId, isCompleted: true}))
  }

  return (
    <CheckboxContainer>
      {todoItems.length > 0 ? (
      <> 
      {todoItems.map((todo) => (
        <>
          <Label key={todo.id} htmlFor={todo.id}>
            <Input id={todo.id} type="checkbox" name={todo.task} onClick={() => handleCheck()}/>
            <span>{todo.task}</span>
            <span>{todo.delete}</span>
          </Label>
        </>
      ))}
      </>
      ) : (<p>You have no tasks left today</p>)}
    </CheckboxContainer>
  );
}
export default AllTodoItems

const Input = styled.div`
  display: inline-block;
`
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  `
const Label = styled.div`
  display: flex;
  justify-content: space-between;
  `