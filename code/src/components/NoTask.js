import React from 'react'
import { useSelector } from 'react-redux'
import './notask.css'

export const NoTask = () => {
  const items = useSelector((state) => state.tasks.items)

  return (
    <>
      {!items.length && (

        <div className="no-task">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_5oJUbT.json"
            background="transparent"
            speed="0.5" loop autoplay />
          <h2>There are no tasks yet</h2>
          <p>Add a task and clear your brain!</p>
        </div>
      )}
    </>
  )
}