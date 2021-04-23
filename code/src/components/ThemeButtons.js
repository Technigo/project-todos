import React from "react";
import { useDispatch } from "react-redux";

import { themes } from "../reducers/themes";
import { 
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
    blueTheme, 
    redTheme, 
    greenTheme, 
    yellowTheme, 
    pinkTheme, 
    purpleTheme, 
    boldTheme,
    grayTheme,
    whiteTheme } from "../styledcomponents/StyledTheme";

export const ThemeButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BlueButton onClick={() => dispatch(themes.actions.changeTheme(blueTheme))}></BlueButton>
      <RedButton onClick={() => dispatch(themes.actions.changeTheme(redTheme))}></RedButton>
      <GreenButton onClick={() => dispatch(themes.actions.changeTheme(greenTheme))}></GreenButton>
      <YellowButton onClick={() => dispatch(themes.actions.changeTheme(yellowTheme))}></YellowButton>
      <PinkButton onClick={() => dispatch(themes.actions.changeTheme(pinkTheme))}></PinkButton>
      <PurpleButton onClick={() => dispatch(themes.actions.changeTheme(purpleTheme))}></PurpleButton>
      <GrayButton onClick={() => dispatch(themes.actions.changeTheme(grayTheme))}></GrayButton>
      <BoldButton onClick={() => dispatch(themes.actions.changeTheme(boldTheme))}></BoldButton>
      <WhiteButton onClick={() => dispatch(themes.actions.changeTheme(whiteTheme))}></WhiteButton>
    </>
  )
};