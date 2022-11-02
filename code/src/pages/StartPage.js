import React from 'react';
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <>
      <h2>Is it time for work or play?</h2>
      <h3>Check out your list of fun ideas. Or start clearing things off your task list.</h3>
      <Link to="/needtodo">
        <button type="button">Need To Dos</button>
      </Link>
      <Link to="/wanttodo">
        <button type="button">Want to dos</button>
      </Link>
    </>
  )
}