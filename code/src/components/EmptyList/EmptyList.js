/* eslint-disable linebreak-style */
import React from 'react'
import { AddNewTask } from 'components/AddNewTask/AddNewTask'
import empty from '../../assets/empty.svg'

export const EmptyList = () => {
  return (
    <section>
      <h2>There`s nothing left to do!</h2>
      <img src={empty} alt="done" />
      <AddNewTask />
    </section>
  )
}