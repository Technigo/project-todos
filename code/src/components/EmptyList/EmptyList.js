/* eslint-disable linebreak-style */
import React from 'react'
import empty from '../../assets/empty.svg'
import { EmptyListContainer } from './EmptyList.styles'

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <img src={empty} alt="done" />
      <h2>Hurray! You are done.</h2>
    </EmptyListContainer>
  )
}