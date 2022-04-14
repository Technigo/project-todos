import React from "react";
import styled from "styled-components";

const Heading = styled.section`
background-color: #F9CE74;
  padding: 6px;
  text-align: center;
  font-size: 20pt;
  color: #d06e90;
  text-shadow: -2px -2px #6e325e;
`

const Header = () => {

    return (
       
        <Heading>
        <h1>WHAT <mark>TO DO</mark> LIST</h1>
        </Heading>
    
    )
}

export default Header;