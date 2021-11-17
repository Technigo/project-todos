import styled from "styled-components";
import { SharedFooterAndHeaderStyles } from "./SharedFooterAndHeaderStyles";

export const Footer = styled.footer`
  ${SharedFooterAndHeaderStyles}
  align-self: flex-end;
  text-align: center;
  position: fixed;
  background-color: rosybrown;
  opacity: 0.5;
  margin-top: 40px;
  bottom: 0;
  color: white;
  @media (min-width: 769px) {
    height: 60px;
  }
`;
