import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #efefef;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 25px;
  border-bottom: 1px solid #CED0D6;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppTitle = styled.h1`
  color: #808080;
  font-size: 20px;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const DateText = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 7px;
  margin-top: 15px;
  color: #5395b0;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

export const TasksCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fe97a7;
  height: 50px;
  width: 100px;
  border-radius: 7px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 35px;
  }
`;

export const TasksCountText = styled.p`
  color: white;
  margin: 0;
`;
