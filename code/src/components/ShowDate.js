import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

export const ShowDate = () => {
  const date = new Date()

  return (

    <section >
      <Moment format="YYYY/MM/DD">{date}</Moment>
    </section>
  )
}