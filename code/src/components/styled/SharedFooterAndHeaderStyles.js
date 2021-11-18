import { css } from "styled-components";

export const SharedFooterAndHeaderStyles = css`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-all;
  font-weight: 400;
  color: grey;
  box-sizing: border-box;
  @media (min-width: 769px) {
    width: 100%;
    font-size: 16px;
  }
`;
