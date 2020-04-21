import React from "react";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";

const Item = styled.section`
margin: 8px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 24px;

  input {
    transform: scale(2);
    margin: 16px;
  }
`

export const TodoItem = ({ itemIndex }) => {
  //Gets item from store based on its index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  //Creates onRemove handler
  const onRemove = event => {
  }

  //Creates handleOnChange handler to handle the done status
  const handleOnChange = event => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  return <Item className={item.done ? "done" : ""}>
    <input
      type="checkbox"
      onChange={handleOnChange}
      checked={item.done ? "checked" : ""}
    ></input>
    <span>{item.description}</span>
    <button onClick={onRemove}>Remove</button>
  </Item>
}