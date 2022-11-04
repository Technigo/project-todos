import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'

const Header = () => {
  return (
    <section>
      <HeaderText>My todo list!</HeaderText>
      <Counter />
    </section>
  )
}

export default Header;

const HeaderText = styled.h1`
`