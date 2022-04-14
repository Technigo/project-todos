import React from 'react'

import { useSelector } from 'react-redux';

import { Regular, Count } from './styles/FontsAndSpans.styled'
import { FlexRowGradientBg } from './styles/Containers.styled'


const Header = () => {
  const count = useSelector((store) => store.tasks.items.filter((item) => item.isDone === false))

  return (
    <header>
      <FlexRowGradientBg>
        <h1>Today <Regular>{new Date().toLocaleDateString('en-SE', {
          weekday: 'long',
          day: 'numeric'
        })}</Regular>
            {count.length === 0 || count.length === 1 ? (
              <Count>{count.length} task</Count>
            ) : (
              <Count>{count.length} tasks</Count>
            )}</h1>
      </FlexRowGradientBg>
    </header>
  )
}

export default Header
