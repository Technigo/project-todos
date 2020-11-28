import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'
import styled from 'styled-components'

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column; 
`


export const List = () => {
  const items = useSelector(store => store.todos.items)

  return <ListContainer>
    {items.map((item, index) => (
      <Item key={index} item={item}></Item>
    ))}
  </ListContainer>
}