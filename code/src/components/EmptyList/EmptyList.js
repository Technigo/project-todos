/* eslint-disable linebreak-style */
import React from 'react'
// import Lottie from 'react-lottie';
// import animationData from '../../lotties/kiss-of-the-heart.json';
import empty from '../../assets/empty.svg'
import { EmptyListContainer } from './EmptyList.styles'

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      {/* <Lottie
        options={defaultOptions}
        height={400}
        width={400} /> */}
      <img src={empty} alt="done" />
      <h2>Hurray! You are done.</h2>
    </EmptyListContainer>
  )
}