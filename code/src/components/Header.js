import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from '@material-ui/core/Tooltip';
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
  BoldButton,
  WhiteButton } from "../styledcomponents/StyledButtons";

const TitleTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
//   background-color: #F4F4F4;
  border-bottom: 1px solid ${props => props.theme.secondary};
  @media (min-width: 769px) {
    max-width: 600px;
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primary};
  @media (min-width: 769px) {
    font-size: 58px;
  }
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
      <Title>TODO</Title>
        <Tooltip title="Change theme">
        <SettingsButton
            onClick={() => setOpen(true)}><FontAwesomeIcon icon="cog" /></SettingsButton>
        </Tooltip>
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
            <WhiteButton onClick={() => dispatch(themes.actions.changeWhiteTheme(theme))}></WhiteButton>
          </DrawerContainer>
        </Drawer>   
    </TitleTop>
  )
};