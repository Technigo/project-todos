// import styled, { keyframes } from "styled-components";
import styled from 'styled-components';

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  color: white;
  border-radius: 50%;
  margin-left: 5px;
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