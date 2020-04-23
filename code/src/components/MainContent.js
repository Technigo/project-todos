import React from 'react'
import { useSelector } from 'react-redux'
import { AddItem } from 'components/AddItem'
import { Summary } from 'components/Summary'
import { ItemsList } from 'components/ItemsList'
import { EmptyState } from 'components/EmptyState'

export const MainContent = () => {

  const itemExists = useSelector((store) => store.todos.items).length >= 1

  return (
    <main className="main-content">
      <AddItem />

      {itemExists &&
        <>
          <Summary />
          <ItemsList />
        </>
      }

      {!itemExists && <EmptyState />}
    </main>
  )
}
