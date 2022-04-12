import React from "react";
import styled from "styled-components/macro";
import noprojects from "../assets/noprojects.svg";

const NoProjects = () => {
  return (
    <Wrapper>
      <NoProjectsIcon src={noprojects} alt="Three layered documents" />
      <h2>Looks like you don't have any to-do lists!</h2>
      <h2>
        Click the plus icon above to create your first project to-do list!
      </h2>
    </Wrapper>
  );
};

export default NoProjects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NoProjectsIcon = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px auto 0 auto;
`;
