import React from "react"
import { useSelector } from "react-redux"
import { Item } from "components/Item"

import "./itemsList.css"

export const ItemsList = () => {
  const items = useSelector((state) => state.tasks.items)

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))

      }
    </ul>

  )
}