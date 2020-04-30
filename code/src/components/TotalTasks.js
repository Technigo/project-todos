import React from 'react'
import { useSelector } from 'react-redux'
import { Title, Paragraph } from '../styles/Text'

export const TotalTasks = () => {
  const items = useSelector((state) => state.todo.items)

  return (
    <>
      <Title>you have {(items.length === 0) ? 'no' : items.length} things to do</Title>
      {(items.length === 0) ? <Paragraph>Let's be creative and make some new tasks!</Paragraph> : <Paragraph>What's stopping you? Just do it!</Paragraph>}
    </>
  )
}
