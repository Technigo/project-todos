import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from '@material-ui/core/Tooltip';

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
  WhiteButton, } from "../styledcomponents/StyledButtons";
import { 
  TitleTop, 
  Title, 
  DrawerContainer, 
  DrawerContainerText } from "../styledcomponents/StyledHeader";
import { 
  blueTheme, 
  redTheme, 
  greenTheme, 
  yellowTheme, 
  pinkTheme, 
  purpleTheme, 
  boldTheme,
  grayTheme,
  whiteTheme } from "../styledcomponents/StyledTheme";


export const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <TitleTop>       
      <Title>toDO</Title>
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
            <BlueButton onClick={() => dispatch(themes.actions.changeTheme(blueTheme))}></BlueButton>
            <RedButton onClick={() => dispatch(themes.actions.changeTheme(redTheme))}></RedButton>
            <GreenButton onClick={() => dispatch(themes.actions.changeTheme(greenTheme))}></GreenButton>
            <YellowButton onClick={() => dispatch(themes.actions.changeTheme(yellowTheme))}></YellowButton>
            <PinkButton onClick={() => dispatch(themes.actions.changeTheme(pinkTheme))}></PinkButton>
            <PurpleButton onClick={() => dispatch(themes.actions.changeTheme(purpleTheme))}></PurpleButton>
            <GrayButton onClick={() => dispatch(themes.actions.changeTheme(grayTheme))}></GrayButton>
            <BoldButton onClick={() => dispatch(themes.actions.changeTheme(boldTheme))}></BoldButton>
            <WhiteButton onClick={() => dispatch(themes.actions.changeTheme(whiteTheme))}></WhiteButton>
          </DrawerContainer>
        </Drawer>   
    </TitleTop>
  )
};