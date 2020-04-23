import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import { Title, DayTitle, SubTitle } from 'library/Text'
import { TopContainer } from 'library/Container'
import { RemoveAllButton } from 'library/Button'

export const TaskSummary = () => {
  const items = useSelector((state) => state.notepad.items.filter((item) => item.done === false))
  const today = new Date()
  const todayName = today.toLocaleDateString('en-SE', { weekday: 'long', month: 'long', day: 'numeric' })
  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(notepad.actions.removeAll())
  }

  return (
    <TopContainer>
      <Title>Just do it.</Title>
      <DayTitle>{todayName}</DayTitle>
      <SubTitle>There are {items.length} things left to do.</SubTitle>
      <RemoveAllButton onClick={clearAll}>Clear All Tasks</RemoveAllButton>
    </TopContainer>
  )
}