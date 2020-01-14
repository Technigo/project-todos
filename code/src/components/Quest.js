import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const Quest = ({ questIndex }) => {
  const dispatch = useDispatch()
  const currentQuest = useSelector((state) => state.quests.questsList[questIndex])

  const handleStatus = () => (dispatch(quests.actions.doneToggle({ questIndex })))

  return (
    <div>{currentQuest.text}-{currentQuest.category}
      <button
        type="button"
        onClick={handleStatus}> {currentQuest.status ? 'done' : 'not done'}
      </button>
    </div>)
}