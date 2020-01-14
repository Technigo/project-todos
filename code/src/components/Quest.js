import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const Quest = ({ questIndex }) => {
  const dispatch = useDispatch()
  const currentQuest = useSelector((state) => state.quests.questsList[questIndex])

  return (
    <div>{currentQuest.text}-{currentQuest.category}
      <button
        type="button"
        onClick={() => dispatch(quests.actions.doneToggle({ questIndex }))}> {currentQuest.status ? 'done' : 'not done'}
      </button>
    </div>)
}