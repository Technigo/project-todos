import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from 'styled-components/macro'

const LottieContainer = styled.div`
  height: 40%
`

const EmptyStateAnimation = () => {
  const container = useRef(null)

  useEffect (() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottieAnimation.json')
    })
  })
  
  return (
     <LottieContainer className='container' ref={container}/>
  )
}

export default EmptyStateAnimation