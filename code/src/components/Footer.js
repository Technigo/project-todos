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
        <RemoveWrapper>
          <ButtonStyle onClick={handleRemoveAll}>✕</ButtonStyle>
          <ClearAll>CLEAR MY TO DO LIST</ClearAll>
        </RemoveWrapper>
        <FooterTextWrapper>
          <FooterText>Project ToDo App</FooterText>
          <FooterText>Sofia Andersson</FooterText>
          <FooterText>Technigo 2022</FooterText>
          <FooterText>Icon:thenounproject.com</FooterText>
        </FooterTextWrapper>
      </FooterInnerWrapper>
    </FooterOuterWrapper>
  )
};

export const FooterOuterWrapper = styled.footer`
background-color: white;
display: flex;

align-items: center;
justify-content: center;
`;

export const FooterInnerWrapper = styled.div`
width: 85%;
display: flex;
justify-content: space-between;

@media (min-width: 667px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const RemoveWrapper = styled.div`
font-size: 12px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
font-family: 'Roboto', sans-serif;

&:hover Button{
  cursor: pointer;
  background: #F69101;
  color: black;
}
`;

export const ButtonStyle = styled.button`
  height: 40px;
  width: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  background: #F69101;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 667px) {
    
  }

  @media (min-width: 1024px) {
    
  }
`;

export const FooterTextWrapper = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;
`;

export const ClearAll = styled.p`
color: black;
`;

export const FooterText = styled.p`
font-size: 10px;
align-self: flex-end;
margin: 0;
color: grey;
font-family: 'Roboto', sans-serif;
`;