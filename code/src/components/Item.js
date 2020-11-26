import React from 'react'
import{useDispatch } from 'react-redux'
import moment from "moment"

import {tasks} from 'reducers/tasks'
import styled from 'styled-components'

export const Item = (items) => {

const dispatch = useDispatch()

const handleChecked = () => {
	dispatch(tasks.actions.checkTodoTask(items.item.id))
}
const handleRemoved = () => {
	dispatch(tasks.actions.taskRemoved(items.item.id))
}
return (
	<ItemContainer>
        <label>
          <input type="checkbox"
            checked={items.item.checkedTodo}
            onChange={handleChecked} />
        </label>
        <p>
          {items.item.name}
        </p>
        <button
          type="button"
          onClick={handleRemoved}>
          <span role="img" aria-label="remove-button">❌</span>
        </button>
        <p>
          Added {moment(items.item.createdAt).fromNow()}
        </p>
		</ItemContainer>
  )
}

const ItemContainer = styled.p`
align-self: flex-start;
padding:8px;
margin:8px;
font-size:32px;
color:#F7AF9D;
width: 50%;
background-color:#F7E3AF; 
`;