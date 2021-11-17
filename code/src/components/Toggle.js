import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  margin: 0;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return <ToggleContainer onClick={toggleTheme}>Dark/Light</ToggleContainer>;
};

export default Toggle;
