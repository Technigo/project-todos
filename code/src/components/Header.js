import React from "react";
import styled from "styled-components";

const Banner = styled.section`
  background-color: red;
  position: relative;
  top: 0;
  background-size: cover !important;
  z-index: 0;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Hamburger = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 0;

  div {
    width: 30px;
    height: 2px;
    background: white;
    display: flex;
    margin-left: 15px;
  }
`;

const Header = () => {
  return (
    <Banner>
      <Hamburger>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
    </Banner>
  );
};

export default Header;
