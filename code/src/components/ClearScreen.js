import React from 'react';
import { Link } from 'react-router-dom'

export const ClearScreenTask = () => {
  return (
    <section>
      <h3>Nice, no more musts.</h3>
      <h3>Go check out your list of fun ideas and have fun!</h3>
      <Link to="/wanttodo"><button type="button">Want to dos</button></Link>
    </section>
  )
}

export const ClearScreenIdea = () => {
  return (
    <section>
      <h3>Nothing on your wishlist?</h3>
      <h3>Go do the thing that inspire you and come back to add all your new ideas.</h3>
    </section>
  )
}