import styled from "styled-components";

export const TitleTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 95%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (min-width: 769px) {
    padding: 20px 0;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primary};
  @media (min-width: 768px) {
    font-size: 58px;
  }
`;

export const DrawerContainer = styled.aside`
  background-color: ${props => props.theme.secondary};
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
`;

export const DrawerContainerText = styled.p`
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.buttonText};
  font-weight: bold;
  margin-right: 10px;
  @media (min-width: 768px) {
      font-size: 18px;
  }
`;
