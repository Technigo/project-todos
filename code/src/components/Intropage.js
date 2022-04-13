import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



//styled components

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

const Container = styled.div`
width: 375px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media ${devices.tablet} {
    width: 768px;
}

@media ${devices.desktop} {
    width: 1025px;
}
`

const IntroHeading = styled.h1 `
color: #1D3F6F;
font-size: 34px;
text-align: center;
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 6px;
font-family: 'Roboto', sans-serif;
font-size: 15px;
`

const IntroImage = styled.img`
width: 350px;
margin-top: 15px;
`
  
const IntroPage = () => {

    return (

      <Container>
       <IntroImage src="./assets/todo-illustration.png" alt="Illustration made by pch.vector - www.freepik.com" />

        <IntroHeading>
         Your best friend – <br />
         The Todo App.
        </IntroHeading>

        <Link to="/app">
            <Button>Let's get this started</Button>
        </Link>
        </Container>
    )
}


export default IntroPage
