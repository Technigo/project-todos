import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p className="cred">
      Image by <a href="https://www.freepik.com/free-vector/people-making-list-illustration_3530044.htm#query=todo%20list&position=4&from_view=keyword">rawpixel.com</a> on Freepik
      </p>
    </FooterContainer>
  )
};
export default Footer;

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
margin-top: 20px;

.cred{
font-size: 6px;

@media (min-width: 667px) and (max-width: 1024px) {
  font-size: 8px;
}
@media (min-width: 1025px) {
  font-size: 10px;
}
}
`