import React from 'react';
import { FooterWrapper } from '../styling/GlobalStyling';

export const Footer = () => {
  const handleReload = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <FooterWrapper>
      <p>A web app made by Karin Nordkvist </p>
      <p>@ Technigo - 14/24 - Copyright 2020</p>
      <span onClick={handleReload}>▴</span> {/* To clear the local storage */}
    </FooterWrapper>
  );
};
