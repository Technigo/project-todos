import styled from "styled-components";

// For Header component
export const SettingsButton = styled.button`
  font-size: 28px;
  background-color: transparent;
  border-radius: 50%;
  padding: 0;
  color: ${props => props.theme.primary};
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;

const ColorButton = styled.button`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  :hover {
    opacity: 0.7;
  }
`;

export const BlueButton = styled(ColorButton)`
  background-color: #a7c5eb;
`;

export const RedButton = styled(ColorButton)`
  background-color: #ec4646;
`;

export const GreenButton = styled(ColorButton)`
  background-color: #7eca9c;
`;

export const YellowButton = styled(ColorButton)`
  background-color: #ffefa0;
`;

export const PinkButton = styled(ColorButton)`
  background-color: #e6c4c0;
`;

export const PurpleButton = styled(ColorButton)`
  background-color: #b4aee8;
`;

export const GrayButton = styled(ColorButton)`
  background-color: #e8e8e8;
`;

export const BoldButton = styled(ColorButton)`
  background-color: #121013;
`;

export const WhiteButton = styled(ColorButton)`
  background-color: #fff;
`;

// For Task Card component
export const RemoveButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  font-size: 20px;
  :hover {
      opacity: 0.5;
  };
`;

// For Task Form component
const ThemeColors = styled.button`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.buttonText};
  :hover {
    opacity: 0.7;
  }
`;

export const AddTaskButton = styled(ThemeColors)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  width: 80px;
  height: 80px;
  margin-top: -90px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.backgroundColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  :hover {
    transform: scale(1.1);
    opacity: 1;
  }
  @media (min-width: 769px) {
    width: 120px;
    height: 120px;
    font-size: 68px;
  }
`;

export const SubmitButton = styled(ThemeColors)`
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

// For To Do List component
export const ClearAllButton = styled(ThemeColors)`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
  margin: 10px 0 20px 10px;
  ${props =>
    props.disabled ?
    `
    opacity: 0.3;
    `:  `
    opacity: 1;
  `};
`;