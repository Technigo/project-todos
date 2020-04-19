import React from 'react'
import moment from 'moment'


export const Header = () => {
  return(
    <div>
      Todays date is: {moment().format("MMMM Do, Y")}
      <p>My To do app</p>
    </div>
  )
}