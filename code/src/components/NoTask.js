import React from "react";
import styled from "styled-components";

import { Section } from "./GlobalStyledComponents";

const NoTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 3px dashed #d9d9d9;
  margin: 15px auto;
  padding: 20px;

  @media (min-width: 992px) {
    margin: 50px 225px;
  }
`;

const NoTask = () => {
  return (
    // <Section>
    <NoTaskDiv>
      <span className="emoji no-task" role="img" aria-label="palm tree">
        🌴
      </span>
      <p>No tasks to do!</p>
    </NoTaskDiv>
    // </Section>
  );
};

export default NoTask;
