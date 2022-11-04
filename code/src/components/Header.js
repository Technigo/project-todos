import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      {/* <Icons/> */}
    </HeaderContainer>
  )
};
export default Header;

const HeaderContainer = styled.header`
height: 25vh;
position: relative;
background-image: url("Assets/Background-web.svg");
background-size: cover;
background-color: var(--main-color);

// img{
//   position: absolute;
//   width: 40%;
//   right: 0%;
//   bottom: -24%;
// }
.header-title{
  position: absolute;
  left: 10%;
  bottom: 20%;
  font-size: 38px;

}
.header-subtitle{
  position: absolute;
  left: 10%;
  bottom: 10%;
  font-size: 30px;

}

@media (min-width: 667px) and (max-width: 1024px) {
  height: 40vh;
}
@media (min-width: 1025px) {
  height: 44vh;
  background-image: url("Assets/background-web.svg");

}
`

// const Icons = styled.i`
// `

// CREAD:
// // img className="header-image" src= X alt="" /> */}
// <a href="https://www.freepik.com/free-vector/people-making-list-illustration_3530044.htm#query=todo%20list&position=4&from_view=keyword">Image by rawpixel.com</a> on Freepik
