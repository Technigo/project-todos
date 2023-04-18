import React from 'react';
import styled from 'styled-components'

export const Wave = styled.div`
 background-image: url('https://i.postimg.cc/fRwZq135/red-wave2-01.png');
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