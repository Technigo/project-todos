import React from 'react'

export const Header = () => {
  return (
    <header>
        <h1 className="left">Todo all</h1>
        <p className="right">4 tasks</p>
        <p className="left">Date here</p>
        <button className="right">Clear all</button>
    </header>
  )
}