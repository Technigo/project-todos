import React from 'react'
import { useSelector } from 'react-redux'
import { HandleThings } from 'components/HandleThings'


export const ListedThings = () => {
  const items = useSelector((state) => state.bag.items)

  return (
    <>
    <ul>
      {items.map((item) => (
        <HandleThings key={item.id} item={item}/>
      ))}
    </ul>
    <h5>On the list {items.length}</h5>
    </>
  )
}