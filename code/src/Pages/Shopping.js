
import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderShopping } from 'components/HeaderShopping'
import { ShoppingList } from 'components/ShoppingList'

export const Shopping = () => {

  return (
    <>
      <HeaderShopping />
      <Link to="/">
        To Do =>
    </Link>
      <ShoppingList />
    </>
  )
}