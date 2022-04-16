import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

// Styled Components
const HeaderSection = styled.section`
  /* display: flex;
  flex-direction: column; */
`;

const Title = styled.h1`
  margin: 20px 0 5px;
  color: #fff;
`;

const TextP = styled.p`
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.5);
`;

// Styled Components

const Header = () => {
  const dateTime = format(new Date(), "'Today is ' eeee LLLL d, yyyy ");

  return (
    <HeaderSection>
      <Title>Todo list</Title>
      <TextP>{dateTime}</TextP>
    </HeaderSection>
  );
};

export default Header;
