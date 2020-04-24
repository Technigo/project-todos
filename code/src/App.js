import React from "react";
import { Home } from "./pages/home.js";
import styled from "styled-components";

export const App = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  margin: 20px auto;
  width: 350px;
`;
