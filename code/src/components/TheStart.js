import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const TextField = styled.h2`
  justify-content: center;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
   color: grey;
  font-family: "Baloo 2", cursive;
  }
`;

const Wrap = styled.div`
  margin-top: 30px;
  margin-left: 55px;
  background: rgba(255, 255, 255, 0.6);
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 5px 15px 15px 15px;
  border-radius: 50px;
  border: none;
`;
const StartButton = styled.button`
  display: flex;
  justify-content: center;
  color: grey;
  background: rgba(233, 181, 181, 0.6);
  padding: 10px;
  border-radius: 50px;
  justify-content: space-around;
  font-family: "Baloo 2", cursive;
  border: none;
`;
const TheStart = () => {
  return (
    <>
      <Wrap>
        <TextField> Hey You!</TextField>
        <TextField>Time to be organize</TextField>

        <Link to="/Todos">
          <StartButton> ADD SOME TO DO </StartButton>
        </Link>
      </Wrap>
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_ZcIjtY.json"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </>
  );
};

export default TheStart;
