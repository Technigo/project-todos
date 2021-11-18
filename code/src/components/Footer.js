import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #ee7d69;
  width: 100%;
  font-size: 20px;
  padding: 10px;
`;
const FooterText = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: white;
  text-align: center;
  font-family: "Open Sans Condensed", sans-serif;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  /* A handwritten font here */
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        Styled and developed by{" "}
        <Link
          href="https://github.com/madeleinesvensson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Madeleine Svensson
        </Link>
      </FooterText>
    </FooterWrapper>
  );
};
