import React from 'react'
import { useSelector } from 'react-redux'

export const TaskCounter = () => {
  const number = useSelector((store) => store.TaskReducer.items.length)
  const showAmount = useSelector(
    (store) => store.TaskReducer.items.filter((item) => item.isComplete).length
  )

  console.log('i am both completed and not')
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

  console.log('i am both completed and not')
  return (
    <section className="counter">
      <h4>{showAmount} / {number} completed</h4>
    </section>
  )
}