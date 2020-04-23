import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkText = styled.a`
  text-decoration: none;
  color: red;
`

export const ShoppingList = () => {

  return (
    <>
    <h1>Shopping</h1>

    <Link to="/">
          To Do => 
    </Link>
  
    </>
  )
}