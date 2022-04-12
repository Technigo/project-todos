import React from "react";
import styled from "styled-components";
import notasks from "../assets/notasks.svg";

const NoTasks = () => {
  return (
    <Wrapper>
      <NoTasksIcon src={notasks} alt="pencil over paper" />
      <h3>Add your first new to-do task above!</h3>
    </Wrapper>
  );
};

export default NoTasks;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NoTasksIcon = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px auto 0 auto;
`;
