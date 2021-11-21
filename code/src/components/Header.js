import React from "react";
import styled from "styled-components";
import img from "../images/mountain-background.jpeg";


//Styled component
const HeaderTag = styled.header`
  height: 40vh;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: center;
  text-align: center;

  .header-container {
    margin-top: 40px;
    padding-top: 20px;
  }

  .title {
    color: rgb(0, 30, 108);
    font-family: "Indie Flower", cursive;
    text-transform: capitalize;
    font-size: 2.2rem;
  }
`;

const Header = () => {
  return (
    <HeaderTag>
      <div className="header-container">
        <h1 className="title">My todo list</h1>
      </div>
    </HeaderTag>
  );
};

export default Header;
