import React from 'react'
import { ItemsCount } from 'components/ItemsCount'
import { ClearBtn } from 'components/ClearBtn'

export const ItemData = () => {
  return (
    <div className="item-data">
      <ItemsCount />
      <ClearBtn />
    </div>
  )
}
