import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/emptystate.json'

export const UncontrolledLottie = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="empty-state">
        <p>Nothing to see here.. why don't you add someting to do?</p>
        <Lottie 
          options={defaultOptions}
          className="lottie"
        />
      </div>
    )
}

