import React from 'react'

import { Regular, LeftMargin } from './styles/Fonts.styled'
import { FlexRow } from './styles/Containers.styled'

const Header = () => {
  return (
    <header>
      <FlexRow>
        <h1>Today <Regular>{new Date().toLocaleDateString('en-SE', {
          weekday: 'long',
          day: 'numeric'
        })}</Regular><LeftMargin>3 tasks</LeftMargin></h1>
      </FlexRow>
    </header>
  )
}

export default Header