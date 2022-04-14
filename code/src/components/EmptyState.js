import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EmptySection } from './styles/emptyStyles'

const EmptyState = ({ emptyText, emptyIcon }) => {

  return (
    <EmptySection>
      <p>{emptyText}</p>
      <FontAwesomeIcon icon={emptyIcon} />
    </EmptySection>
  )
}

export default EmptyState
