import React from "react";
import styled from "styled-components";
import noprojects from "../assets/noprojects.svg";
import { Container } from "styledelements/elements";

const NoProjects = () => {
  return (
    <Container>
      <Wrapper>
        <NoProjectsIcon src={noprojects} alt="Three layered documents" />
        <h2 tabIndex="0">Looks like you don't have any to-do lists!</h2>
        <h2 tabIndex="0">
          Click the plus icon above to create your first project to-do list!
        </h2>
      </Wrapper>
    </Container>
  );
};

export default NoProjects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const NoProjectsIcon = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px auto 0 auto;
`;
