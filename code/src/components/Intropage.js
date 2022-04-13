import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
  
const IntroPage = () => {

    return (

        <>
       <img src="./assets/todo-illustration.png" alt="Illustration made by pch.vector - www.freepik.com" width="450px" />

        <h1 className="header-start">
            Do it today – get it out of your head
        </h1>

        <Link to="/app">
            <Button>Write it down</Button>
        </Link>
        </>
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