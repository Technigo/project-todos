import React from 'react';
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <h2>Sorry, we can not find the page</h2>
      <Link to="/">
        <button type="button">Homepage</button>
      </Link>
    </>
  )
}