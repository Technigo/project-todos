import React from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player'
import './emptystate.css'

export const EmptyState = () => {

  return (
    <main className="empty-state-container">
      <p className="p-empty-state">Well done! 🏆<br />You've deserved some rest. </p>
     
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_HPkAIy.json"
          style={{ height: '300px', width: '300px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      

    </main>
  )
}