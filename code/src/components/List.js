import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'
import styled from 'styled-components'
import { todos } from 'reducers/todos'

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column; 
  align-self: center;
`
const ListActionButton = styled.button`
  align-self: center;
  padding: 4px;
  margin: 2px;
  font-size: 22px;
  color: #3f3f3f;
`

export const List = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  return <ListContainer>
    {items.map((item, index) => (
      <Item key={index} item={item}></Item>
    ))}
    <ListActionButton onClick={() => dispatch(todos.actions.removeAll())}>
      Remove all
    </ListActionButton>
    <ListActionButton onClick={() => dispatch(todos.actions.removeDone())}>
      Remove all done
    </ListActionButton>
  </ListContainer>
}