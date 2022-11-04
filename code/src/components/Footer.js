import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>ToDos - A To-do list © Elin Segelöv</p>
      <a href="https://www.flaticon.com/free-icons/thumb-tack" title="thumbtack icon">Thumbtack icon created by popo2021 - Flaticon</a>
    </StyledFooter>

  )
}

export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  height: 5vh;
  top: 95vh;
  text-align: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p{
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
  }
`