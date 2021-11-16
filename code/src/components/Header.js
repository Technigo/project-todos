import styled from "styled-components";

export const Header = styled.header`
  width: ${(props) => props.width}vw;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}px;
  font-size: 12px;
  top: 0;
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  word-break: break-all;
  font-weight: 400;
  color: white;

  @media (min-width: 769px) {
    width: 100vw;
    background-color: transparent;
    height: 40px;
    padding: 20px;
    font-size: 16px;
  }
`;
