import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Item } from './Item.js'

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style-type:none;
`

export const List = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <ListContainer>
      {items.map((item, index) => (
        <div>
          <Item key={index} item={item} />
        </div>
      ))}
    </ListContainer>
  );
};
