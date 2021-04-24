import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";

import { themes } from "../../reducers/themes";
import { 
    BlueButton, 
    RedButton, 
    GreenButton, 
    YellowButton, 
    PinkButton, 
    PurpleButton, 
    GrayButton, 
    BoldButton,
    WhiteButton, } from "../../styledcomponents/StyledButtons";
import { 
    blueTheme, 
    redTheme, 
    greenTheme, 
    yellowTheme, 
    pinkTheme, 
    purpleTheme, 
    boldTheme,
    grayTheme,
    whiteTheme } from "../../styledcomponents/StyledTheme";

export const ThemeButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Tooltip title="Blue">
        <BlueButton onClick={() => dispatch(themes.actions.changeTheme(blueTheme))}></BlueButton>
      </Tooltip>
      <Tooltip title="Red">
        <RedButton onClick={() => dispatch(themes.actions.changeTheme(redTheme))}></RedButton>
      </Tooltip>
      <Tooltip title="Green">
        <GreenButton onClick={() => dispatch(themes.actions.changeTheme(greenTheme))}></GreenButton>
      </Tooltip>
      <Tooltip title="Yellow">
        <YellowButton onClick={() => dispatch(themes.actions.changeTheme(yellowTheme))}></YellowButton>
      </Tooltip>
      <Tooltip title="Pink">
        <PinkButton onClick={() => dispatch(themes.actions.changeTheme(pinkTheme))}></PinkButton>
      </Tooltip>
      <Tooltip title="Purple">
        <PurpleButton onClick={() => dispatch(themes.actions.changeTheme(purpleTheme))}></PurpleButton>
      </Tooltip>
      <Tooltip title="Gray">
        <GrayButton onClick={() => dispatch(themes.actions.changeTheme(grayTheme))}></GrayButton>
      </Tooltip>
      <Tooltip title="Black">
        <BoldButton onClick={() => dispatch(themes.actions.changeTheme(boldTheme))}></BoldButton>
      </Tooltip>
      <Tooltip title="White">
        <WhiteButton onClick={() => dispatch(themes.actions.changeTheme(whiteTheme))}></WhiteButton>
      </Tooltip>
    </>
  )
};