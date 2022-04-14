import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceMehBlank } from '@fortawesome/free-regular-svg-icons'

import { EmptySection } from './styling/StyledEmpty'

const NoSearchResults = () => {

  return (
    <EmptySection>
      <p>Nothing fits your search, maybe worth checking the spelling...</p>
      <FontAwesomeIcon icon={faFaceMehBlank} />
    </EmptySection>
  )
}

export default NoSearchResults
