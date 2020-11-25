import React from 'react'
import moment from 'moment'

export const Header = () => { 
  return <div>{moment().format("MMMM Do")}</div>
}