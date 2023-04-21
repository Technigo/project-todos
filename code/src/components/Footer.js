import React from 'react';
import styled from 'styled-components';
/* import {footer-hs-annika} from "" */

const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://github.com/annikalindberg"><img src="/assets/annika.jpg" className="contact-logo" alt="link to Annika's github" /></a>
      </div>
      <div className="about-me">
        <p>Project by Annika Lindberg at the Technigo Web Development Bootcamp 2023.</p>
      </div>
    </footer>
  )
}

export default Footer