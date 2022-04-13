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
`
  
const IntroPage = () => {

    return (

      <Container>
       <img src="./assets/todo-illustration.png" alt="Illustration made by pch.vector - www.freepik.com" width="300px" />

        <h1 className="header-start">
            Lets do it today
        </h1>

        <Link to="/app">
            <Button>Write it down</Button>
        </Link>
        </Container>
    )
}


export default IntroPage


//styled components
const Button = styled.button`
background: transparent;
border-radius: 10px;
font-family: 'Della Respira', serif;
font-size: 14px;
border: 1px solid gray;
padding: 0.3rem;
`