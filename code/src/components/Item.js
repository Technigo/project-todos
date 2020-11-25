import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(false)
  

  return (
    <ItemContainer>
      {item.text}
      <span className="actions">
        <button type="button" onClick={() => { dispatch(tasks.actions.removeItem(item)) }}>Remove todo</button>
      </span>
      <input type="checkbox" id="button" name="button" value="button" checked={check} onChange={() =>setCheck(prev => !prev)}/>
    </ItemContainer>
  )
}