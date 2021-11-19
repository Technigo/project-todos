import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import styled from "styled-components";
import img from "../images/mountain-background.jpeg";

//Styled component
const HeaderTag = styled.header`
  height: 45vh;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: center;
  text-align: center;

  .header-container {
    margin-top: 40px;
    padding-top: 20px;
  }

  .heading-one {
    color: rgb(0, 30, 108);
    font-family: "Indie Flower", cursive;
    text-transform: capitalize;
    font-size: 2.3rem;
  }

  .date {
    color: rgb(253, 140, 4);
    margin-top: 10px;
  }

  .amount {
    color: rgb(0, 30, 108);
  }

  .date,
  .amount {
    font-weight: bolder;
    font-family: "Indie Flower", cursive;
    
  }
`;

const Header = () => {
  const amountTasks = useSelector((store) => store.todos.items.length);

  return (
    <HeaderTag>
      <div className="header-container">
        <h1 className="heading-one">My todo list</h1>
        <h2 className="date">{moment().format("Do MMMM YY")}</h2>
        <h3 className="amount">Tasks to do: {amountTasks}</h3>
      </div>
    </HeaderTag>
  );
};

export default Header;
