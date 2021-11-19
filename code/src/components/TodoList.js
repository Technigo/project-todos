import React from "react"
import DayJS from "react-dayjs"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <TodoListContainer>
      {items.map((item, index) => (
        <FlexItem key={item.id}>
          <CheckButton>
            <Checkbox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <ItemText
              style={{ textDecoration: item.isComplete ? "line-through" : "" }}
            >
              {item.text}
            </ItemText>
          </CheckButton>

          <CreatedTime>
            <DayJS
              style={{ padding: "5px" }}
              element="span"
              format="dddd H:mm"
            />

            <DeleteButton onClick={() => onDeleteTodoImmutability(item.id)}>
              <Wastecan src="./assets/wastecan.svg" />
            </DeleteButton>
          </CreatedTime>
        </FlexItem>
      ))}
    </TodoListContainer>
  )
}

export default TodoList

const CreatedTime = styled.div`
  display: flex;
  align-items: center;
`
const Wastecan = styled.img`
  width: 20px;
`

const Checkbox = styled.input`
  height: 20px;
  margin: 0 6px 0 0;
  cursor: pointer;
  filter: invert(95%);
`
const DeleteButton = styled.button`
  border: none;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  :hover {
    filter: invert(55%) sepia(100%) saturate(766%) hue-rotate(358deg)
      brightness(101%) contrast(104%);
  }
`
const ItemText = styled.p`
  color: rgb(31, 31, 31);
  margin: 6px;
  font-size: 14px;
  font-style: normal;
  text-align: left;
  max-width: 200px;
`
const CheckButton = styled.div`
  display: flex;
  align-items: center;
`
const FlexItem = styled.div` {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(177, 177, 177, 0.194);
  color: rgb(123, 123, 123);
  font-size: 11px;
  font-style: italic;
  margin: 3px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #999999;
`
const TodoListContainer = styled.section` {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 90%;
  padding: 10px;
`
