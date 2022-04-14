import React from 'react'
import styled from "styled-components/macro"

const FooterSection = styled.div`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
/* padding: 20px 0 10px 0; */
border: 2px solid red;
border-radius: 5px;
background: #fff;

& p {
  text-align: center;
}

& a {
  color: inherit;
  font-weight: bold;
}
`

const Footer = () => {
  return (
    <FooterSection>
      <p>App made by &nbsp;
        <a
          href="https://nadialefebvre.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio Nadia Lefebvre"
        >
          Nadia Lefebvre
        </a>
      </p>
    </FooterSection>
  )
}

export default Footer
