import React from "react";

import styled from "styled-components";

export const EmptyState = () => {
  return (
    <Container>
      <Header>Well done! No tasks left!</Header>
      <Image src={require("../img/jump.jpg")}></Image>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  @media (min-width: 450px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  width: 60%;
  opacity: 0.8;
  @media (min-width: 900px) {
    width: 30%;
  }
`;
