import React from 'react'
import { AddItem } from 'components/AddItem'
import { ItemData } from 'components/ItemData'
import { ItemsList } from 'components/ItemsList'

export const MainContent = () => {
  return (
    <main className="main-content">
      <AddItem />
      <ItemData />
      <ItemsList />
    </main>
  )
}
