import React from "react";
import styled from "styled-components";

//imported components
import RemoveAllButton from "./RemoveAllButton";
import CheckAllButton from "./CheckAllButton";
import UncheckAllButton from "./UncheckAllButton";
import TasksCompleted from "./TasksCompleted";
import AmountTasks from "./AmountTasks";
import Date from "./Date";

//Styled components:
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  font-size: 0.8rem;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const Subheader = () => {
  return (
    <Container>
      <Date /> 
      <AmountTasks />
      <TasksCompleted />
      <ButtonContainer>
        <CheckAllButton />
        <UncheckAllButton />
        <RemoveAllButton />
      </ButtonContainer>
    </Container>
  );
};
export default Subheader;
