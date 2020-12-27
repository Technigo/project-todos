import React from 'react'

import './EmptyList.css'

export const EmptyList = () => {
  return (
    <div className='gif-wrapper'>
      <img 
      className='empty-list-gif'
      src={require('../media/animation.gif')}
      alt='GIF of a seal with sun glasses'
      />
      <h2>There is nothing left to do!</h2>
      <p className='sub-title'>Take a break or add another to-do!</p>
    </div>
  )
}
