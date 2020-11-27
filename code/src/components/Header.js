import React from 'react'
import moment from 'moment'

import { Summary } from './Summary'

export const Header = () => {

  return (
    <div>
      <h1><span role='img' aria-label='Todo'>✏️</span> TODO </h1>
      <h3>{moment().format('LLLL')}</h3>
      <Summary />
      <hr/>
    </div>
  )
}