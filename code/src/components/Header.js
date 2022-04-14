import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const Title = styled.h1`
/* font-family: 'Roboto', sans-serif; */
color: #000172;
font-size: 34px;
font-weight: 300;
text-transform: uppercase;
font-style: italic;
margin: 0;
border-bottom: 1px solid #000172;

`

const SubTitle = styled.h3`
/* font-style: italic; */
font-weight: 200;
font-size: 16px;
margin: 5px 0 20px 0;

color: #AD6122;
`

const Header = () => {

  return(
    <HeaderWrapper>
      <Title>Get things done.</Title>
      <SubTitle>..it's easy to forget</SubTitle>
    </HeaderWrapper>
  )

}

export default Header