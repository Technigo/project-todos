// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import './Contact.css';

// /////////////// COMPONENT //////////////////////// //

// This component is used to display the icons to make contact.
// Oh, and if you only lurking the repo. Heres my email: pererikandreas at gmail dot com.

export const Contact = () => {
  return (
    <div className="icons-container">
      <div className="icons-children">
        <a href="https://www.linkedin.com/in/andreas-axelsson-042588253/" title="Link to Andreas Axelsson's LinkedIn profile" aria-label="Link to Andreas LinkedIn profile">
          <img className="icons" src="./Images/linkedin.svg" alt="Linked-In icon" />
        </a>
        <a href="https://github.com/PerErikAndreas" title="Link to Andreas Axelsson's GitHub profile" aria-label="Link to Andreas GitHub profile">
          <img className="icons" src="./Images/github.svg" alt="GitHub icon" />
        </a>
        <a href="https://www.instagram.com/pererikandreas/?hl=en" title="Link to Andreas Axelsson's Instagram profile" aria-label="Link to Andreas Instagram profile">
          <img className="icons" src="./Images/instagram.svg" alt="Instagram icon" />
        </a>
      </div>
    </div>

  );
};