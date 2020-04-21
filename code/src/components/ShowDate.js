import React from 'react'






export const ShowDate = () => {

  const d = new Date()
  const today = d.toDateString()

  return (
    <>
      <h1>{today}</h1>
    </>
  )
}