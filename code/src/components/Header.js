import React from 'react'

import { Regular, Count} from './styles/Fonts.styled'
import { FlexRow } from './styles/Containers.styled'
import { taskList } from '../reducers/tasks'

const Header = () => {
  return (
    <header>
      <FlexRow>
        <h1>Today <Regular>{new Date().toLocaleDateString('en-SE', {
          weekday: 'long',
          day: 'numeric'
        })}</Regular><Count>{taskList.length} tasks</Count></h1>
      </FlexRow>
    </header>
  )
}

export default Header
