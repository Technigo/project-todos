import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

import { themes } from '../reducers/themes';
import { 
  SettingsButton, 
  BlueButton, 
  RedButton, 
  GreenButton, 
  YellowButton, 
  PinkButton, 
  PurpleButton, 
  GrayButton, 
  BoldButton } from "../styledcomponents/Buttons";

const TitleTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 92%;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primary};
`;

const DrawerContainer = styled.aside`
  background-color: ${props => props.theme.primary};
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
`;

const DrawerContainerText = styled.p`
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.buttonText};
  font-weight: bold;
  margin-right: 10px;
`;


export const Header = () => {
  const theme = useSelector((state) => state.themes.theme);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <TitleTop>
      <Title>TODO's</Title>
        <SettingsButton
            onClick={() => setOpen(true)}><FontAwesomeIcon icon="palette" /></SettingsButton>
        <Drawer 
          anchor="top"
          open={open}         
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}>
          <DrawerContainer>
            <DrawerContainerText>Choose Color Theme: </DrawerContainerText>
            <BlueButton onClick={() => dispatch(themes.actions.changeBlueTheme(theme))}></BlueButton>
            <RedButton onClick={() => dispatch(themes.actions.changeRedTheme(theme))}></RedButton>
            <GreenButton onClick={() => dispatch(themes.actions.changeGreenTheme(theme))}></GreenButton>
            <YellowButton onClick={() => dispatch(themes.actions.changeYellowTheme(theme))}></YellowButton>
            <PinkButton onClick={() => dispatch(themes.actions.changePinkTheme(theme))}></PinkButton>
            <PurpleButton onClick={() => dispatch(themes.actions.changePurpleTheme(theme))}></PurpleButton>
            <GrayButton onClick={() => dispatch(themes.actions.changeGrayTheme(theme))}></GrayButton>
            <BoldButton onClick={() => dispatch(themes.actions.changeBoldTheme(theme))}></BoldButton>
          </DrawerContainer>
        </Drawer>   
    </TitleTop>
  )
};