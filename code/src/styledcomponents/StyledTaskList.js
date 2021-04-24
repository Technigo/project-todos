import styled from "styled-components";

// For TaskList
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 100px 10px;
  width: 92%;
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

export const TaskListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
`;

// For FilterTasks
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  margin-bottom: 10px;
  width: 100%;
`;

export const LabelText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 2px;
  @media (min-width: 768px) {
    font-size: 17px;
    margin: 5px;
  }
`;

// For TaskCounter
export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`;

export const CounterText = styled.p`
  font-size: 14px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

// For ClearButtons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;