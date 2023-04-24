import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
   flex-direction: row;
   width: 100%;
   margin: 0 0 0 0px;
`;

export const BtnContainer = styled.div`
  margin: 70px 40px 40px -20px;
  @media (min-width: 380px) {
    margin: 70px 40px 40px 40px;
  }
  @media (min-width: 600px) {
    margin: 80px;
  }
  @media (min-width: 768px) {
    margin: 80px;
  }
`;

export const DayAndTasksWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 70px 0px 0 0px;
@media (min-width: 600px) {
    margin: 70px 0px 0 0px;
  }
  @media (min-width: 768px) {
    margin: 70px 0px 0 0px;
  }
`;

export const WeekDay = styled.p`
  font-family: 'Sora';
  font-size: 1.8rem;
  color: white;
  margin: 0 0 0 0px;
  padding: 0px 0px;
  @media (min-width: 400px) {
    font-size: 2.2rem;
 }
 @media (min-width: 600px) {
    font-size: 3.8rem;
    margin-left: 0px;
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    font-size: 3.8rem;
    margin-left: 0px;
    margin-top: 0px;
  }

`;

export const TodayDate = styled.p`
  font-family: 'Sora';
  font-size: 1rem;
  color: white;
  margin: 0;
  padding: 0 0px;
  display: none;
  
`;

export const TasksDueToday = styled.p`
  font-family: 'Sora';
  font-size: 0.9rem;
  color: white;
  margin: 0;
  padding: 0px 0px;
  @media (min-width: 400px) {
    font-size: 1.2rem;
 
 }

 @media (min-width: 600px) {
    font-size: 1.8rem;
    margin-left: 0px;
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-left: 0px;
    margin-top: 0px;
  }

`;