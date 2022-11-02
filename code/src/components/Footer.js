import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'

import { tasks } from '../reducers/tasks'

export const Footer = () => {
  const dispatch = useDispatch();

  // Removes all tasks
  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll());
  }

  return (
    <FooterOuterWrapper>
      <FooterInnerWrapper>
        <ButtonStyle onClick={handleRemoveAll}>REMOVE ALL TASKS</ButtonStyle>
        <FooterText>Project - Todo App</FooterText>
        <FooterText>Sofia Andersson @ Technigo Bootcamp 2022</FooterText>
        <FooterText>Logo/icon from Noun Project</FooterText>
      </FooterInnerWrapper>
    </FooterOuterWrapper>
  )
};

export const FooterOuterWrapper = styled.footer`
background-color: #F69101;
border-bottom-left-radius: 25%;
`;

export const FooterInnerWrapper = styled.div`
display: flex;
`;

export const ButtonStyle = styled.button`
color: black;
background-color: #E8E9EE;
border: none;
padding: 10px;
font-weight: 700;
`;

export const FooterText = styled.p`
font-size: 12px;
`;