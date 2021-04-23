import React from 'react';

const NoTodosLeft = () => {


    return (
      <div className="no-todos-left">
          <p>No todos left!</p>
          <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_rep49mth.json"
          background="transparent"
          speed="1"
          style={{width: '300px', height: '300px'}}
          loop autoplay></lottie-player>
      </div>
    )
  };


  export default NoTodosLeft;