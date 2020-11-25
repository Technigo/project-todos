import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import styled from 'styled-components'

const AllTodoItems = () => {
  const todoItems = useSelector((store) => {
    return store.todolist.list;
  });
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
          <Button
            onClick={()=> handleDelete({ todoId: todo.id })}>
            {/* {todo.delete} */}
              🗑
          </Button>
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
  // background-color: ${checked => checked ? 'blue' : 'green'}
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
  border-bottom: 1px dotted #808080;
  height: 50px;
`
const CheckboxDisplay = styled.div`
  display: flex;
  justify-item: flex-start;
  `

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  `
const Button = styled.button`
  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  border: none;
  &:focus {
    border: 2px solid #222;
  }
`