import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrap>
      <p>created by Cecilia Frånlund</p>
    </FooterWrap>
  )
}
export default Footer;

const FooterWrap = styled.div`
text-align: center;
padding: 20px;
font-size: 0.8rem;
color: #FFB800;
`