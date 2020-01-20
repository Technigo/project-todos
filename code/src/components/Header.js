import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderWrapper } from 'components/styles'

export const Header = () => {
  const totalTasks = useSelector((store) => (store.todoList.items.reduce(total => total + 1, 0)))
  // const today = new Date()

  // Nice to have: incomplete tasks. filter?

  return (
    <HeaderWrapper>
      <div>Today</div>
      <div>{totalTasks}</div>
    </HeaderWrapper>
  )
}