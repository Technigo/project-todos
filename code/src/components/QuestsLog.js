import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const QuestsLog = () => {
  const [text, setText] = useState()
  const dispatch = useDispatch()

  const questsList = useSelector((state) => state.quests.questsList)

  const handleChange = (e) => { setText(e.target.value) }
  const handleClick = () => {
    dispatch(quests.actions.createQuest({ text }))
    setText('')
  }

  return (
    <>
      {questsList.map((e) => (<div>{e.text}</div>))}
      <input type="Text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>Add</button>
    </>
  )
}