import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer />
  )
};
export default Header;

const HeaderContainer = styled.header`
height: 25vh;
overflow: hidden;
background-position: center;
background-image: url("Assets/Background-web.svg");
background-size: cover;
background-color: var(--main-color);


@media (min-width: 667px) and (max-width: 1024px) {
  height: 40vh;
}
@media (min-width: 1025px) {
  // height: 15vh;
  min-height: 400px;
  background-image: url("Assets/background-web.svg");

}
`

// const Icons = styled.i`
// `

// CREAD:
// // img className="header-image" src= X alt="" /> */}
// <a href="https://www.freepik.com/free-vector/people-making-list-illustration_3530044.htm#query=todo%20list&position=4&from_view=keyword">Image by rawpixel.com</a> on Freepik
