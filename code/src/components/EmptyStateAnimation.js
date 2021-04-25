import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

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
     <div className='container' ref={container}/>
  )
}

export default EmptyStateAnimation