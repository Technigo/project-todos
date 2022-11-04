import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const TaskCounter = () => {
  const number = useSelector((store) => store.TaskReducer.items.length)
  const showAmount = useSelector(
    (store) => store.TaskReducer.items.filter((item) => item.isComplete).length
  )

  return (
    <section className="counter">
      <h4>{showAmount} / {number} completed</h4>
    </section>
  )
}

export const IdeaCounter = () => {
  const number = useSelector((store) => store.IdeaReducer.items.length)
  const showAmount = useSelector(
    (store) => store.IdeaReducer.items.filter((item) => item.isComplete).length
  )

  return (
    <section className="counter">
      <Text>{showAmount} / {number} completed</Text>
    </section>
  )
}

const Text = styled.h4`
Margin: 0;
color: #ff7ab8;
`