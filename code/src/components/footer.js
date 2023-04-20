import React from 'react';
import linkedin from './images/blacklinkedinicon.svg'

export const Footer = () => {
  return (
    <footer className="Footer">
      <p>A website made by Movimiento © 2023 student @ Technigo </p>
      <div className="iconslinkedin">
        <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/">
          <img src={linkedin} alt="button to linkedin black" />
        </a>
      </div>
    </footer>
  );
};

