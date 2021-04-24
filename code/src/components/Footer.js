import React from 'react'

import styled from 'styled-components'

const FooterSection = styled.div `
margin-top: 20px;
padding: 10px;
background-color: rgb(235, 195, 64);
position: fixed;
bottom: 0;
left: 0;
width: 100%;
`
const Text = styled.h2 `
  font-size: 15px;
  text-align: center;
`

const Footer = () => {
  return (
    <>
     <FooterSection>
       <Text>Project Todo week 15, Technigo Bootcamp</Text>
       <Text>Maria Sparre</Text>
     </FooterSection>
    </>
    )
}

export default Footer 