import React, { useState } from "react";
import moment from "moment";
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from '@material-ui/core/Tooltip';

import { ThemeButtons } from "./ThemeButtons";
import { SettingsButton } from "../styledcomponents/StyledButtons";
import { 
  TitleTop, 
  TitleDate,
  Title, 
  DateTitle,
  DrawerContainer, 
  DrawerContainerText } from "../styledcomponents/StyledHeader";


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <TitleTop>
      <TitleDate>      
        <Title>toDO</Title>
        <DateTitle>{moment().format("Do MMM YYYY")}</DateTitle>
      </TitleDate> 
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
            <ThemeButtons />
          </DrawerContainer>
        </Drawer>   
    </TitleTop>
  )
};