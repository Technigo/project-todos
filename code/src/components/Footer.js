import React from 'react'
import styled from 'styled-components'
import LinkedInImg from '../images/linkedin.png'
import GitHubImg from '../images/github.png'

export const Footer = () => {
  return (
    <Foot>
      <p>TBL | 2023</p>
      <IconDiv>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/theres-br%C3%A4nnberg-lendt-222770139/">
          <Icon
            aria-label="linked profile"
            src={LinkedInImg}
            alt="linked-in-icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/theresBL">
          <Icon
            aria-label="github profile"
            src={GitHubImg}
            alt="github-icon" />
        </a>
      </IconDiv>
    </Foot>
  )
}

const Foot = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
color: #f0ece2;
gap: 10px;
font-size: 14px;
`
const IconDiv = styled.div`
display: flex;
gap: 20px;
`

const Icon = styled.img`
width: 32px;
height: 32px;

&:hover{
  transform: scale(1.2);
}
`