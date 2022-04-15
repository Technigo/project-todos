import React from "react";

import { 
  EmptyStateWrapper,
  Folder,
  SubHeading 
} from "styles";

const EmptyState = () => {
  return (
    <EmptyStateWrapper>
      <p><Folder role="img" aria-label="folder">📁</Folder></p>
      <SubHeading>Hurray</SubHeading>
      <p>There's nothing left to do!</p>
    </EmptyStateWrapper>
  )
}

export default EmptyState