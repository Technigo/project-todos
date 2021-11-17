import styled from "styled-components";
import { SharedFooterAndHeaderStyles } from "./SharedFooterAndHeaderStyles";

export const Header = styled.header`
  ${SharedFooterAndHeaderStyles}
  align-self: flex-start;
  position: fixed;
  top: 0;
  background-color: transparent;

  @media (min-width: 769px) {
    height: 40px;
  }
`;
