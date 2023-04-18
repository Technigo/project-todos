/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PopupProvider } from 'react-custom-popup';
import { Tasks } from './Tasks/Tasks';
import { NavBar } from './Navbar';

export const Main = (props) => (
  <PopupProvider>
    <NavBar />
    {/* <Projects /> */}
    <Tasks {...props} />
  </PopupProvider>
);
