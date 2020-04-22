import React from 'react'
import moment from 'moment'

export const Header = () => {
  const rightNow = moment().format('HH:mm | D/M')

  //Current time and date
  return (
    <div>
      <h3 className="todoTime">
        {rightNow}
      </h3>
    </div>
  )
}