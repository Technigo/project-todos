import React from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { todos } from "../reducers/todos.js"
import { Checkbox } from "../library/Checkbox"

const ItemContainer = styled.section`
margin: 8px;
display: flex;
justify-content: space-between;
font-size: 18px;

  button {
    padding: 6px;
    margin: 6px; 
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    border: 1px solid #535c68;
    border-radius: 6px;
    background: #f5f6fa;
    font-family: 'Work Sans', sans-serif;
  }
`

const Item = styled.div`
display: flex;
align-items: center;
`

export const TodoItem = ({ itemIndex }) => {
  //Gets item from store based on its index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  //Creates onRemove handler
  const handleRemove = event => {
    dispatch(todos.actions.removeTodo({
      itemIndex: itemIndex
    }))
  }

  //Creates handleOnChange handler to handle the done status
  const handleOnChange = event => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  return <ItemContainer >
    <Item>

      {/* Replace this checkbox with custom checkbox: */}
      <Checkbox 
         onChange={handleOnChange}
         checked={item.done ? "checked" : ""}
      />
      <span>{item.description}</span>
    </Item>
    <button onClick={handleRemove}>Remove</button>
  </ItemContainer>
}