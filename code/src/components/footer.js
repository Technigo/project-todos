import React from 'react'
import styled from 'styled-components'
import Github from '../icons/githubicon.png'

const FooterWrapper = styled.footer`
justify-content: center;
opacity: 0.9;
bottom: 150px;
`;
const GitLink = styled.img`
  width: 25px;
  &:hover {
    color: white;
    filter: brightness(100); 
}
`;
const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 146px;

`;

export const Footer = () => {
  return (
    <div className="icon">
      <FooterWrapper>
        <StyledA href="https://github.com/AnnaElvine">
          <GitLink src={Github} alt="github" />
        </StyledA>
      </FooterWrapper>
    </div>
  );
};

export default Footer;