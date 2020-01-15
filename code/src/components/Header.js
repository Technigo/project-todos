import React from "react";
import { Counter } from "components/Counter";
import { DeleteAll } from "./DeleteAll";

import styled from "styled-components";

export const Header = () => {
  return (
    <Main>
      <Head>Your personal todo list:</Head>
      <Right>
        <Counter />
        <DeleteAll />
      </Right>
    </Main>
  );
};

const Main = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 1.5rem;
  @media (min-width: 900px) {
    margin: 3rem;
  }
`;

const Head = styled.h1`
  font-size: 1.2rem;
  letter-spacing: 1px;
  display: flex;
  align-self: center;
  margin-top: 3rem;
  @media (min-width: 450px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;

const Right = styled.div`
  align-self: flex-end;
  margin-bottom: 3rem;
`;
