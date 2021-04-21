import React from 'react'

const NoToDos = () => {

  return(
    <div className='no-task-container'>
      NO TO DOS
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_6wuFVO.json" 
        background="transparent" 
        speed="1"
        style={{width: '300px', height: '300px'}}
        loop
        autoplay></lottie-player>
    </div>
  )
}

export default NoToDos