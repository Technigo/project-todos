import React from 'react'
import { useSelector } from 'react-redux'
import { Shop } from './Shop'
import { AddShopping } from './AddShopping'
import { ListItem } from 'styledComponents/ListItem'


export const ShoppingList = () => {
  const list = useSelector(store => store.shopping.list)

  return (
    <div>
      <AddShopping />
      {list.items.map((item, index) => (
        <Shop itemIndex={index}></Shop>
        ))}
    </div>
  )
}