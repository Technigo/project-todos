// import styled, { keyframes } from "styled-components";
import styled from 'styled-components';

export const AddButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 25px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: green;
  color: white;
  border-radius: none;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;