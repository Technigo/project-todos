import React from 'react'
import styled from 'styled-components'
import image from '../Assets/image.webp'

const HeaderContainer = styled.div`

/* background-image: url(${image});
background-size: cover;
position: relative;
height: 300px;
resize: both;
background-position-y: 20%; */
.text-box {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
}

h1 {
    font-size: 5em;
    letter-spacing: 10px;
    text-transform: uppercase;
    transform: rotate(-10deg);
    color: #121212;

    color: #fff;

text-shadow: 3px 3px 20px #DCDCDC,
    -2px 1px 30px #7FFFD4;
}

`

const Header = () => {
  return (
    <HeaderContainer>
      <div className="text-box">
        <h1>To-Do!</h1>
      </div>
    </HeaderContainer>
  )
}

export default Header