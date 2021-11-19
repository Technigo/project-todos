import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  font-size: 12px;
  text-align: center;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #012f66;
  }

  a:visited {
    text-decoration: none;
    font-weight: 700;
    color: #012f66;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        &#169; by{' '}
        <a
          href='https://www.linkedin.com/in/katie-wu-213a82150/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Katie Wu
        </a>
        &nbsp;| Team Foxes 🦊 | Technigo
      </p>
    </FooterStyled>
  )
}

export default Footer
