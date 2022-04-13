import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons'

import { EmptySection } from './styling/StyledEmpty'

const NoPendingTask = () => {

  return (
    <EmptySection>
      <p>All tasks are completed, hurrah!</p>
      <FontAwesomeIcon icon={faFaceGrinStars} />
    </EmptySection>
  )
}

export default NoPendingTask
