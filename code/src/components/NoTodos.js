import React from "react";
import styled from "styled-components/macro";

export const NoTodos = () => {
  return <TodoContainer>No To-Do's yet</TodoContainer>;
};

const TodoContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #474747;
  padding: 5px;
  margin: 4px 0;
  font-size: 16px;
`;
