import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const Title = styled.h1`
font-family: 'Prata', serif;
/* color: #000172; */
color: #AD6122;
font-size: 50px;
font-weight: bolder;
/* text-transform: uppercase; */
font-style: italic;
margin: 0 40px;
border-bottom: 1px solid rgba(173, 99, 39, 0.52);

@media (min-width: 768px) {
  font-size: 70px;
}

`

const SubTitle = styled.h3`
/* font-style: italic; */
font-weight: 300;
font-size: 18px;
margin: 5px 0 20px 0;
font-style: italic;
color: #000172;
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