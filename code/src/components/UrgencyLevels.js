import React, { useMemo } from 'react'
import { FaClock } from 'react-icons/fa';
import { IconContext } from 'react-icons'

export const Urgent = () => {
  const red = useMemo(() => ({ color: 'red' }), []);

  return (
    <IconContext.Provider value={red}>
      <FaClock />
    </IconContext.Provider>
  )
}

export const LessUrgent = () => {
  const orange = useMemo(() => ({ color: 'orange' }), []);

  return (
    <IconContext.Provider value={orange}>
      <FaClock />
    </IconContext.Provider>
  )
}

export const NotUrgent = () => {
  const green = useMemo(() => ({ color: 'green' }), []);

  return (
    <IconContext.Provider value={green}>
      <FaClock />
    </IconContext.Provider>
  )
}