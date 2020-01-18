import React from "react";
// import { useDispatch } from "react-redux";
// import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const EmptyState = () => {
  return (
    <Container>
      <Header>Well done! No tasks left!</Header>
      <Image src={require("../img/jumped.jpg")}></Image>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  color: white;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  border-radius: 20px;
  width: 60%;
  opacity: 0.8;
  @media (min-width: 900px) {
    width: 30%;
  }
`;
