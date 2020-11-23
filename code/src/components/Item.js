import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
  background-color: #b8f4ff;
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      {item.text}
      <span className="actions">
        <button type="button" onClick={() => { dispatch(tasks.actions.removeItem(item)) }}>Remove todo</button>
      </span>
    </ItemContainer>
  )
}