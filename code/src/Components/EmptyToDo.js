import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/emptystate.json'

export const UncontrolledLottie = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        className: "lottie"
      }
    };

    return(
      <div className="empty-state">
        <p>
          Nothing to see here.. why don't you add someting to do?
        </p>
        <div className="lottie-container">
        <Lottie options={defaultOptions}/>
        </div>
      </div>
    )
}

