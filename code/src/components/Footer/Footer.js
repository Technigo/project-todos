import React from 'react';
import './Footer.css';

const date = new Date();
const currentYear = date.getFullYear();

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        Made by{' '}
        <a
          className='footer-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/isomoth'
        >
          Isabel González
        </a>{' '}
        @ Technigo
      </p>
      <p>Copyright {currentYear}</p>
    </div>
  );
};
