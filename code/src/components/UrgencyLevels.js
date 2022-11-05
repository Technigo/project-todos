/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { FaClock } from 'react-icons/fa';
import { IconContext } from 'react-icons'

export const Urgent = () => {
  return (
    <IconContext.Provider value={{ color: 'red' }}>
      <FaClock />
    </IconContext.Provider>
  )
}

export const LessUrgent = () => {
  return (
    <IconContext.Provider value={{ color: 'orange' }}>
      <FaClock />
    </IconContext.Provider>
  )
}

export const NotUrgent = () => {
  return (
    <IconContext.Provider value={{ color: 'green' }}>
      <FaClock />
    </IconContext.Provider>
  )
}