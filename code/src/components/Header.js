import React from "react";
import styled from "styled-components";

const Banner = styled.section`
  background-color: #8fc9a3;
  position: relative;
  top: 0;
  background-size: cover !important;
  z-index: 0;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
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
  @media (min-width: 768px) {
    padding: 5px 0 5px 70px;
  }

  div {
    width: 30px;
    height: 2px;
    background: white;
    display: flex;
    margin-left: 15px;
  }
`;

const Home = styled.div`
  color: white;
  padding-left: 20px;
  font-size: 21px;
  @media (min-width: 768px) {
    padding-left: 40px;
    font-size: 23px;
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
      <Home>
        <i class="fas fa-home"></i>
      </Home>
    </Banner>
  );
};

export default Header;
