import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrimace } from '@fortawesome/free-regular-svg-icons'

import { EmptySection } from './styling/StyledEmpty'

const NoCompletedTask = () => {

  return (
    <EmptySection>
      <p>Complete some tasks and this section won't be empty!</p>
      <FontAwesomeIcon icon={faFaceGrimace} />
    </EmptySection>
  )
}

export default NoCompletedTask
