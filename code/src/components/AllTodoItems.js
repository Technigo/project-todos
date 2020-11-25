import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import styled from 'styled-components'

const AllTodoItems = () => {
  const todoItems = useSelector((store) => {
    console.log("store", store);
    return store.todolist.list;
  });
  console.log(todoItems, "todoItems")
  const dispatch = useDispatch()

  const handleCheck = ({ todoId }) => {
    dispatch(todoList.actions.handleChecked({ todoId }))
  }

  const handleDelete = ({ todoId }) => {
    dispatch(todoList.actions.handleDeleted({ todoId }))
  }

  return (
    <CheckboxContainer>
      {todoItems.length > 0 ? (
      <> 
      {todoItems.map((todo) => (
        <CheckboxItem key={todo.id}>
          <CheckboxDisplay>
            <Input
              id={todo.id}
              type="checkbox"
              name={todo.task}
              checked={todo.isCompleted}
              onChange={() => handleCheck({ todoId: todo.id })}
            />
            <Label htmlFor={todo.id}>
              <span>{todo.task}</span>
            </Label>
          </CheckboxDisplay>
          <button
            onClick={()=> handleDelete({ todoId: todo.id })}>
            {todo.delete}
          </button>
        </CheckboxItem>
      ))}
      </>
      ) : (<p>You have no tasks left today</p>)}
    </CheckboxContainer>
  );
}
export default AllTodoItems

const Input = styled.input`
  display: inline-block;
`
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  `
const CheckboxItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CheckboxDisplay = styled.div`
  display: flex;
  justify-item: flex-start;
  `

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  `