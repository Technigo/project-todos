import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceDizzy, faFaceFlushed, faFaceGrinSquintTears, faFaceMeh } from '@fortawesome/free-regular-svg-icons'

import { EmptySection, EmptyIconsBox } from './styling/StyledEmpty'

const NoTask = () => {

  return (
    <EmptySection>
      <EmptyIconsBox>
        <FontAwesomeIcon icon={faFaceDizzy} />
        <FontAwesomeIcon icon={faFaceFlushed} />
      </EmptyIconsBox>
      <p>Follow you mood and add some funny or boring task in the form above.</p>
      <EmptyIconsBox>
        <FontAwesomeIcon icon={faFaceGrinSquintTears} />
        <FontAwesomeIcon icon={faFaceMeh} />
      </EmptyIconsBox>
    </EmptySection>
  )
}

export default NoTask
