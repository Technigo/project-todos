import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

import TaskCounter from "./TaskCounter";

// Styled Components
const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 3em;
`;

const Title = styled.h1`
  margin: 20px 0 5px;
  color: #000;
`;

const TextP = styled.p`
  margin: 0 0 20px;
  color: rgba(0, 0, 0, 0.5);
`;

// Styled Components

const Header = () => {
  const dateTime = format(new Date(), "'Today is ' eeee LLLL d, yyyy ");

  return (
    <>
      <HeaderSection>
        <Title>Todo list</Title>
        <TextP>{dateTime}</TextP>
        <TaskCounter />
      </HeaderSection>
    </>
  );
};

export default Header;
