import styled from "styled-components";

export const TitleTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 95%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (min-width: 769px) {
    padding: 20px 0 10px 0;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }
`;

export const TitleDate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  color: ${props => props.theme.primary};
  @media (min-width: 768px) {
    font-size: 58px;
  }
`;

export const DateTitle = styled.p`
  color: ${props => props.theme.primary};
  margin: -3px 0 0 0;
  font-weight: thin;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
    margin-top: -7px;
  }
`;

export const DrawerContainer = styled.aside`
  background-color: ${props => props.theme.drawer};
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
`;

export const DrawerContainerText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  margin-right: 10px;
  @media (min-width: 768px) {
      font-size: 18px;
  }
`;
