import React from "react";
import styled from "styled-components";


const mediaqueries = {
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

const Heading = styled.section`
background-color: #1B1212;
height:200px;
  padding: 4px;
  text-align: center;
  font-size: 24pt;
  color: #EF63BB;
  text-shadow: -2px -2px #803B66;
  border-bottom: dashed #E8E5E5;

  @media ${mediaqueries.tablet} {
    font-size: 34pt;
}

@media ${mediaqueries.desktop} {
  font-size: 44pt;
  height:250px;
}
`
const Colormark = styled.mark`
color: #465AFF;
text-shadow: -2px -2px #1B2574;
background:none;
`

const Header = () => {
    return (
        <Heading>
        <h1>WHAT <Colormark>TO DO</Colormark> LIST</h1>
        </Heading>
    )
}

export default Header;