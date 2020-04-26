import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const HeaderContainer = styled.div`
  border: 2px solid navy; 
  padding: 2em;
  display: flex;
  justify-content: space-between;
` 



export const Header = () => {
  const todos = useSelector((store) => store.todos.list)
    return (
      <HeaderContainer>
        <h3>Your list of to dos </h3>
        <p>You have completed x / {todos.items.length} things to do!</p>
      </HeaderContainer>
    )
  }