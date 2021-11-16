import styled from "styled-components";

export const Footer = styled.footer`
  width: ${(props) => props.width}vw;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}px;
  bottom: 0;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-all;
  font-weight: 400;
  color: black;
  font-size: 12px;

  @media (min-width: 769px) {
    width: 100vw;
    height: 60px;
    padding: 20px;
    font-size: 16px;
  }
`;
