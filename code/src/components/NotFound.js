import React from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"


//styled components
const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
    }
    
    const Container = styled.div `
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media ${devices.tablet} {
        width: 768px;
    }
    
    @media ${devices.desktop} {
        width: 1025px;
    }
    `

const ErrorButton = styled.button`
background: transparent;
border-radius: 10px;
font-family: 'Roboto', serif;
font-size: 14px;
border: 1px solid gray;
padding: 0.3rem;
`


const NotFound = () => {

    const navigate= useNavigate()
    const onHomeButtonClick = () => {
        navigate('/')
    }

    return (
        <Container>
            <img src="./assets/sorry.jpg" alt="illustration created by storyset, www.freepik.com" width="300px"/>
            <p>
               <h2> Ooopsi, this page does not exist.</h2>
               <h3> Try again! </h3>
                <ErrorButton onClick={onHomeButtonClick}>Return to Home Page</ErrorButton>
            </p>

        </Container>

    )

}

export default NotFound