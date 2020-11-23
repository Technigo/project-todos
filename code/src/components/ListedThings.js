import React from 'react'
import { useSelector } from 'react-redux'
import { HandleThings } from 'components/HandleThings'

export const ListedThings = () => {
  const items = useSelector((state) => state.bag.items)
  return (
    <ul>
      {items.map((item) => (
        <HandleThings key={items.id} item={item}/>
      ))}
    </ul>
  )
}