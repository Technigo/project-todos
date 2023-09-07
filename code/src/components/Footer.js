import React from 'react';
// import styled from 'styled-components';

// image
import illustration2 from 'assets/images/Podcast_DrawKit_Vector_Illustrations copy.png';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Illustration } from './Header';

const Footer = () => {
  return (
    <footer>
      <Illustration src={illustration2} alt="illustration" />
      <p>A website created by Nino Aquilon @Technigo &apos;23.</p>
      <section className="contact">
        <a href="https://www.github.com" className="button icon-button" aria-label="Go to my Github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.github.com" className="button icon-button" aria-label="Go to my LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </footer>
  )
};

export default Footer;