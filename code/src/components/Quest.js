import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const Quest = ({ questIndex }) => {
  const dispatch = useDispatch()
  const currentQuest = useSelector((state) => state.quests.questsList[questIndex])

  const handleStatus = () => (dispatch(quests.actions.doneToggle({ questIndex })))

  const handleDelete = () => (dispatch(quests.actions.deleteQuest({ questIndex })))

  return (
    <div className="quest">
      <p>
        <button
          type="button"
          onClick={handleStatus}
          className={currentQuest.status ? 'success' : 'not-done'}>
          {currentQuest.status ? '✔' : '⬜'}
        </button>
        {currentQuest.text}
      </p>
      <button
        type="button"
        onClick={handleDelete}>
        <span role="img" aria-label="delete">❌</span>
      </button>
    </div>)
}