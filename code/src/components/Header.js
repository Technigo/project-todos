import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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


export const Header = () => {
  const theme = useSelector((state) => state.themes.theme);
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