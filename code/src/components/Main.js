/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PopupProvider } from 'react-custom-popup';
import { Tasks } from './Tasks/Tasks';
import { NavBar } from './Navbar';
import Background from '../assets/Background.svg';
import { Image } from '../reusable-components/Background'

export const Main = (props) => (
  <PopupProvider>
    <Image src={Background} alt="background" />
    <NavBar />
    <Tasks {...props} />
  </PopupProvider>
);
