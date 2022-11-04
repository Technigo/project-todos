import React from 'react'
import styled from 'styled-components'
import image from '../Assets/image.webp'

const HeaderContainer = styled.div`
background-image: url(${image});
background-size: cover;
position: relative;
height: 300px;
resize: both;

`

const Header = () => {
  return (
    <HeaderContainer />
  )
}

export default Header