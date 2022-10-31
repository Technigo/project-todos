/* eslint-disable linebreak-style */
import React from 'react'
// import { useDispatch } from 'react-redux'
// import { todos } from 'reducers/todos'
import { AddNewBtn } from 'components/AddNewBtn/AddNewBtn'
import empty from '../../assets/empty.svg'

export const EmptyList = () => {
  return (
    <section>
      <h2>There`s nothing left to do!</h2>
      <img src={empty} alt="done" />
      <AddNewBtn />
    </section>
  )
}