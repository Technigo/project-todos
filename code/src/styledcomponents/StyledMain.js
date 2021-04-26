import styled from "styled-components";

// For TaskPage
export const Main = styled.main`
  background-color: ${props => props.theme.backgroundColor};
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// For NoTasksFound
export const CompletedContainer = styled(Main)`
  font-size: 70px;
  color: ${props => props.theme.secondary};
  margin-top: 30px;
  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

export const CompletedCard = styled(CompletedContainer)`
  background-color: #F4F4F4;
  width: 90%;
  padding: 50px;
  margin: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (min-width: 768px) {
    padding: 100px 50px;
  }
`;

export const CompletedText = styled.h1`
  text-align: center;
  font-size: 24px;
  color: black;
  margin-top: 30px;
`;