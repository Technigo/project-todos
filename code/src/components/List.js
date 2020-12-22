import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Item } from './Item.js'

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  list-style-type:none;
  margin-bottom: 10px;
`

export const List = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <ListContainer>
      {items.map((item) => (  
        <Item key={item.id} item={item} />  
      ))}
    </ListContainer>
  )
}
