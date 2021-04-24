import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CompletedContainer, CompletedCard, CompletedText} from "../../styledcomponents/StyledMain";


export const NoTasksFound = () => {
  return (
    <CompletedContainer>
      <CompletedCard>
        <FontAwesomeIcon icon="check-circle" />
        <CompletedText>No tasks found! So take some time and relax or add new tasks below.</CompletedText>
      </CompletedCard>  
    </CompletedContainer>
  )
};