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
            <Text className="amountOf"> You have no more todos!</Text>
            <img className="winner" src = {Winner} alt="gold trophy"/> 
          </EmptyState> 
        </EmptyStateContainer>    
        )
    }

  return (
    <ListContainer>
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </ListContainer>
    )
  }

