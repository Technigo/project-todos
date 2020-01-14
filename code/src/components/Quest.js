import React from 'react'
import { useSelector } from 'react-redux'

export const Quest = ({ questIndex }) => {
  const quest = useSelector((state) => state.quests.questsList[questIndex])

  return (<div>{quest.text}-{quest.category}</div>)
}