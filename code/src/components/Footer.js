import React from 'react';
import { FooterWrap } from './Footer.styled';
import './Footer.css';

// Footer component for displaying additional information or branding
const Footer = () => {
  return (
    <FooterWrap>
      <div className="bubbles">
        <img className="rotate-scale-up1" src="../bubble2@300.png" alt="Abstract forms like transparent bubbles." />
        <img className="rotate-scale-up2" src="../bubble1@1-300.png" alt="Abstract forms like transparent bubbles." />
        <img className="rotate-scale-up2" src="../bubble3-300.png" alt="Abstract forms like transparent bubbles." />
        <img className="rotate-scale-up3" src="../bubble4-300.png" alt="Abstract forms like transparent bubbles." />
      </div>
    </FooterWrap>
  )
}

// Export the Footer component
export default Footer;