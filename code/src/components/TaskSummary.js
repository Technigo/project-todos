import React from 'react'
import { useSelector } from 'react-redux'
import { Title, DayTitle, SubTitle } from 'library/Text'
import { TitleEmoji } from 'library/Emoji'

export const TaskSummary = () => {
  const items = useSelector((state) => state.notepad.items)
  const today = new Date()
  const todayName = today.toLocaleDateString('en-SE', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <>
      <Title>Hey you! Get on with it!<TitleEmoji ariaLabel='bicep'>💪🏼</TitleEmoji></Title>
      <DayTitle>{todayName}</DayTitle>
      <SubTitle>There are {items.length} things left to do.</SubTitle>
    </>
  )
}