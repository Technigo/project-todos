/* eslint-disable linebreak-style */
import React from 'react'
import empty from '../../assets/empty.svg'
import { EmptyListContainer } from './EmptyList.styles'

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <h2>Hurray! You are done.</h2>
      <img src={empty} alt="done" />
    </EmptyListContainer>
  )
}