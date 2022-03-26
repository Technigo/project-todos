import React from "react";
import styled from "styled-components";
import img from "../../images/snow.jpg";

//Styled component
const HeaderTag = styled.header`
  height: 50vh;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
`;

const HeaderContainer = styled.div`
  padding-top: 50px;
`;

const Title = styled.h1`
  color: #ad5e0f;
  font-family: "Indie Flower", cursive;
  text-transform: capitalize;
  font-size: 2.7rem;
  text-shadow: 2px 2px 2px white;
`;

const Header = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <Title>My todo list</Title>
      </HeaderContainer>
    </HeaderTag>
  );
};

export default Header;
