import React from 'react';
import styled from 'styled-components'

export const Wave = styled.div`
 background-image: url('https://i.postimg.cc/J7S1MkjS/wave-bot-copy.png');
`

export const WaveAnimation = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgMiddle">
        <Wave className="wave waveBottom" />
      </div>
    </div>
  )
}