import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'
import Winner from '../assets/winner.png'

import { EmptyStateContainer, EmptyState, Text, ListContainer } from '../styling/ListStyling'


export const List = () => {
  const items = useSelector((store) => store.todos.items)
  const moreTodos = items.filter((item) => item.id !== true)

    if (moreTodos.length === 0) {
        return (
        <EmptyStateContainer>
          <EmptyState>
            <Text className="amountOf">Great job! you are done!</Text>
            <img className="winner" src = {Winner} alt="gold trophy"/> 
          </EmptyState> 
        </EmptyStateContainer>    
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

