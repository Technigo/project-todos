import React, { useState } from "react";
import moment from "moment";
import { Tooltip, Drawer }  from '@material-ui/core/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ThemeButtons } from "./ThemeButtons";
import { SettingsButton } from "../../styledcomponents/StyledButtons";
import { 
  TitleTop, 
  TitleDate,
  Title, 
  DateTitle,
  DrawerContainer, 
  DrawerContainerText } from "../../styledcomponents/StyledHeader";


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <TitleTop>
      <TitleDate>      
        <Title>toDO</Title>
        <DateTitle>{moment().format("dddd DD MMMM")}</DateTitle>
      </TitleDate> 
      <Tooltip title="Change color theme">
        <SettingsButton
          onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon="cog" />
        </SettingsButton>
      </Tooltip>
      <Drawer 
        anchor="top"
        open={open}         
        onClose={() => setOpen(false)}>
        <DrawerContainer>
          <DrawerContainerText>Choose Color Theme: </DrawerContainerText>
          <ThemeButtons />
        </DrawerContainer>
      </Drawer>   
    </TitleTop>
  )
};