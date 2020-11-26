import React from 'react'

import { Summary } from './Summary'

export const Header = () => {
  return (
    <div>
      <h1>TODO <span role='img' aria-label='Todo'>✏️</span></h1>
      <Summary />
      <hr/>
    </div>
  )
}