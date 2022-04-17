import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.section`
  height: 35vh;
  background-color: #e4fd81;
  margin-left: 5vw;
  margin-bottom: 30px;
`;
const Logo = styled.div`
  height: 300px;
  background-image: url(https://i.ibb.co/h7sdvRV/E4-FD81-1.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: 300px;
  display: block;
`;

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Logo></Logo>
      </HeaderWrap>
    </>
  );
};

export default Header;
