import React from 'react'

import { useSelector } from 'react-redux';

import { Regular, Count} from './styles/Fonts.styled'
import { FlexRow } from './styles/Containers.styled'


const Header = () => {
  const count = useSelector((store) => store.tasks.items.length);

  return (
    <header>
      <FlexRow>
        <h1>Today <Regular>{new Date().toLocaleDateString('en-SE', {
          weekday: 'long',
          day: 'numeric'
        })}</Regular><Count>{count} tasks</Count></h1>
      </FlexRow>
    </header>
  )
}

export default Header
