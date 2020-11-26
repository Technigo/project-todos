import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'
import Winner from '../assets/winner.png'

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
        <section className ="empty-state-container">
          <div className="empty-state">
            <p className="amountOf">Great job! you are done!</p>
            <img className="winner" src = {Winner} alt="gold trophy"/> 
          </div> 
        </section>    
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

  /*
 

*/

