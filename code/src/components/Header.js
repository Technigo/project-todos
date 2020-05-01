import React from 'react'
import { HeadLine, ItalicParagraph } from '../styles/Text'
import { HeaderContainer } from '../styles/Container'

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeadLine>workflow</HeadLine>
        <ItalicParagraph>you are what you do, not what you say you'll do.</ItalicParagraph>
      </HeaderContainer>
    </>
  )
}
