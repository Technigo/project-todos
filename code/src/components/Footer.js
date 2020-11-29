import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-transform: uppercase;
  background-color: #ffff;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #266150;
`;

const FooterInfo = styled.a`
  text-decoration: none;
  color: #266150;
  :visited {
    color: color: #266150;;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      &copy;{" "}
      <FooterInfo href="https://www.linkedin.com/in/joelharde/" target="_blank">
        {" "}
        Joel Harde{" "}
      </FooterInfo>
    </FooterContainer>
  );
};
