import React from "react";

import styled from "styled-components";

export const Sidebar = () => {
  return (
    <Main>
      <p>Show todos: </p>
      <Container>
        <Button type="button">
          <p>All</p>
          <ion-icon name="close-circle" style={{ color: "red" }}></ion-icon>
        </Button>
        <Button type="button">
          <p>Completed</p>
          <ion-icon name="close-circle" style={{ color: "red" }}></ion-icon>
        </Button>
        <Button type="button">
          <p>To be done</p>
          <ion-icon name="close-circle" style={{ color: "red" }}></ion-icon>
        </Button>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;
const Button = styled.button``;
const Container = styled.div`
  display: flex;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
