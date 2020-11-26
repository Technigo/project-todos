import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

const ItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 32px;
  border: 4px solid tomato;
  border-radius: 3px;
  color: tomato;
  width: 100%;
`

const Button = styled.button`
  background-color: white; 
  border: none;
  color: tomato;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
`

const Checkbox = styled.input`
  margin: 12px;
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(false)
  

  return (
    <ItemContainer>
      {item.text}
      <Checkbox type="checkbox" id="button" name="button" value="button" checked={check} onChange={() =>setCheck(prev => !prev)}/>
      <Button type="button" onClick={() => { dispatch(tasks.actions.removeItem(item)) }}>X</Button>
    </ItemContainer>
  )
}