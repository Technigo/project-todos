import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EmptySection } from './styles/emptyStyles'

const EmptyState = ({ emptyText, emptyIcon }) => {

  return (
    <EmptySection>
      <p>{emptyText}</p>
      <span><FontAwesomeIcon icon={emptyIcon} /></span>
    </EmptySection>
  )
}

export default EmptyState
