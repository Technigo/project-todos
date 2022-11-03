import React from 'react';
import { Link } from 'react-router-dom'

export const HomeBtn = () => {
  return (
    <Link to="/">
      <button type="button">Homepage</button>
    </Link>
  )
}