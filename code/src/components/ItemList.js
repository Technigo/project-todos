import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'
import styled from 'styled-components'

export const ItemList = () => {
  const items = useSelector((state) => state.tasks.items)
  return (
    <ListedTask>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ListedTask>
  )
}

const ListedTask = styled.ul`
  padding: 0;
`
