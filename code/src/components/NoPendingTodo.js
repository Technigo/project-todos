import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons'

import { EmptySection } from './styling/StyledEmpty'

const NoPendingTodo = () => {

  return (
    <EmptySection>
      <p>All todos are completed, hurrah!</p>
      <FontAwesomeIcon icon={faFaceGrinStars} />
    </EmptySection>
  )
}

export default NoPendingTodo
