import styled from "styled-components";

// For Header component
export const SettingsButton = styled.button`
  font-size: 36px;
  background-color: transparent;
  color: ${props => props.theme.secondary};
  :hover {
    color: ${props => props.theme.primary};
  }
`;

const ColorButton = styled.button`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin: 3px;
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

// For Task Card component
export const RemoveButton = styled.button`
  background-color: transparent;
  margin-right: 5px;
  font-size: 20px;
  :hover {
      opacity: 0.5;
  };
`;

// For Task Form component
const ThemeColors = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.buttonText};
  :hover {
    background-color: ${props => props.theme.secondary};
  }
`;

export const AddTaskButton = styled(ThemeColors)`
  font-size: 48px;
  width: 80px;
  height: 80px;
  margin-top: -90px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.backgroundColor};
`;

export const SubmitButton = styled(ThemeColors)`
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
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