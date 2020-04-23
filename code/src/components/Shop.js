import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shoppings } from '../reducers/shoppings'

export const Shop = ({ itemIndex }) => {
  const item = useSelector(store => store.shoppings.list.items[itemIndex])

  return (
    <>
      <p>And some shopping items</p>
    </>
  )
}