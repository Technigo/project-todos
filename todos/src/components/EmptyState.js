import React from "react";

import { 
  EmptyStateWrapper,
  Folder,
  SubHeading 
} from "styles";

const EmptyState = () => {
  return (
    <EmptyStateWrapper>
      <Folder><span role="img" aria-label="folder">📁</span></Folder>
      <SubHeading>Hurray</SubHeading>
      <p>There's nothing left to do!</p>
    </EmptyStateWrapper>
  )
}

export default EmptyState