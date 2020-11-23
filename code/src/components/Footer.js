import React from 'react';

import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { FooterContainer, ButtonStyle, FooterText } from '../styling/styling';

const Footer = () => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll());
  }

  return (
    <FooterContainer>
      <ButtonStyle onClick={handleRemoveAll}>Remove all tasks</ButtonStyle>
      <FooterText>Project 15 - Todo App</FooterText>
      <FooterText>Anna Hellqvist @ Technigo Bootcamp 2020</FooterText>
    </FooterContainer>
  )
};

export default Footer;