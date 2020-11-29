import React from 'react'
import { useSelector } from 'react-redux'

import { HandleThings } from 'components/HandleThings'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #0E3932;
`
const Counter = styled.h5`
  display: flex;
  justify-content: center;
  aling-items: center;
  color: #0E3932;
`

export const ListedThings = () => {
  const items = useSelector((state) => state.bag.items)

  return (
    <>
    <List>
      {items.map((item) => (
        <HandleThings key={item.id} item={item}/>
      ))}
    </List>
    <Counter>Your list contains {items.length} things</Counter>
    </>
  )
}