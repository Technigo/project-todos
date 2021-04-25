import React from 'react'
import Lottie from 'react-lottie'
import styled from'styled-components'

import * as animation from '../assets/lottieAnimation'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animation.default,
}

const EmptyStateAnimation = () => {
  return (
    <Container>
     <Lottie options={defaultOptions}/>
    </Container>
  )
}

export default EmptyStateAnimation