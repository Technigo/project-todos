/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const GithubProfileLink = 'https://github.com/Alexander-Gabor';

function handleClick() {
  window.open(GithubProfileLink, '_blank');
}

const Logo = () => {
  return (
    <>
      <FirstTitle>GitDun</FirstTitle>
      <LogoImage
        src="/assets/Header-img6.png"
        alt="guy sitting" />
      {/* <FirstTitle>Daily</FirstTitle>
      <Separator>
        <div className="line" />
        <h1>Planner</h1>
        <div className="line" />
      </Separator> */}
      <GithubLink href={GithubProfileLink} target="_blank">
        <GithubButton onClick={handleClick}>
    Alexander Gabor <Icon src="/assets/giticon.svg" alt="github icon" />
        </GithubButton>
      </GithubLink>
    </>
  )
}

export default Logo

const LogoImage = styled.img`
width: 100%;
margin-top: 20px;
@media (min-width: 600px) and (max-width: 900px){
  width: 90%;
}
@media (min-width: 901px){
  width: 70%;
}
`

const FirstTitle = styled.h1` 
  font-size: 50px;
  font-style: bold;
  line-height: 10px;
  font-weight: 400;
  letter-spacing: 5px;
  color: var(--quaternary);
  margin-top: 50px;
  margin-bottom: 20px;

@media (min-width: 600px) and (max-width: 900px){
  font-size: 75px;  
  margin-top: 70px; 
  line-height: 25px; 
}
@media (min-width: 901px){
  font-size: 120px;
  margin-top: 80px;
  line-height: 40px; 
}
`

const GithubLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const GithubButton = styled.button`
  border: none; 
  margin-top: 10px;
  color: #7a6a6a;
  border-radius: 5px;
  background-color: var(--quinary);
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 2px;
  padding: 7px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
@media (min-width: 600px) and (max-width: 900px){
  font-size: 15px;
}
@media (min-width: 901px){
  font-size: 15px;
}
`

const Icon = styled.img`
width: 20px;
margin: 0px 10px;
`