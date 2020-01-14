import React from 'react'
import { useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const Header = () => {
  const dispatch = useDispatch()

  const deleteAll = () => (dispatch(quests.actions.deleteAllQuests()))

  return (
    <h1>Complete Quests!
      <button
        type="button"
        onClick={deleteAll}>
        Clear Your Quest Log
      </button>
    </h1>
  )
}
