import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'
import styled from 'styled-components'


const ListContainer = styled.ul`
  display:flex;
  width:100%;
  flex-direction: column;
  padding:0;
`

export const List = () => {
  const items = useSelector((store) => store.todos.items)
  const moreTodos = items.filter((item) => item.id !== true)

    if (moreTodos.length === 0) {
        return (
            <p className="amountOf">Keep it up, here there will be an animation!</p>
        )
    }

  return (
    <ListContainer>
      {items.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
    </ListContainer>
    )
  }



