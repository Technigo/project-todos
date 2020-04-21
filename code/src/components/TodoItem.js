import React from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { todos } from "../reducers/todos.js"

const ItemContainer = styled.section`
margin: 8px;
display: flex;
justify-content: space-between;
font-size: 18px;

  input {
    transform: scale(2);
    margin: 16px;
  }

  //How can I make this work????

  span {
    color: ${props => (props.done ? "#95afc0" : "black")}
  }

  button {
    padding: 12px;
    margin: 6px; 
    width: fit-content;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    background: #c7ecee;
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
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={item.done ? "checked" : ""}
      ></input>
      <span done={item.done} className={item.done ? "done" : ""}>{item.description}</span>
    </Item>
    <button onClick={handleRemove}>Remove</button>
  </ItemContainer>
}