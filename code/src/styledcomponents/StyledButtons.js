import styled, { keyframes } from "styled-components";

// For Header component
const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`

export const SettingsButton = styled.button`
  font-size: 28px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.primary};
  :hover {
    opacity: 0.7;
    animation: ${spin} 0.6s linear;
  }
  :focus {
    border-bottom: 2px solid ${props => props.theme.primary};
  }
  @media (min-width: 768px) {
    font-size: 48px;
    margin-right: 10px;
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
  :focus {
    transform: scale(1.15);
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin: 5px;
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
  }
  :focus {
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`;

// For Task Form component
const ThemeColors = styled.button`
  background-color: ${props => props.theme.secondary};
  :hover {
    opacity: 0.7;
  }
`;

export const AddTaskButton = styled(ThemeColors)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-top: -75px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  :hover {
    transform: scale(1.1);
    opacity: 1;
  }
  :focus {
    transform: scale(1.1);
    border: 4px solid ${props => props.theme.primary};
  }
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 68px;
    margin-top: -120px;
  }
`;

export const SubmitButton = styled(ThemeColors)`
  padding: 7px 10px 10px 10px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  :focus {
    border: 4px solid ${props => props.theme.primary};
  }
`;

// For Task List component
export const ClearAllButton = styled(ThemeColors)`
  padding: 3px 5px 4px 5px;
  border-radius: 5px;
  font-size: 14px;
  margin: 10px 0 20px 5px;
  ${props =>
    props.disabled ?
    `
    opacity: 0.3;
    `:  `
    opacity: 1;
  `}
  :focus {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    padding: 5px 10px;
    margin: 10px 0 20px 10px;
    font-size: 18px;
  }
`;

export const DialogButton = styled(ClearAllButton)`
  padding: 5px 10px;
`;