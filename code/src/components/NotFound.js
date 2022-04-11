import React from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const NotFound = () => {

    const navigate= useNavigate()
    const onHomeButtonClick = () => {
        navigate('/')
    }

    return (
        <div>
            <img src="./assets/sorry.jpg" alt="illustration created by storyset, www.freepik.com" width="300px"/>
            <p>
               <h2> Ooopsi, this page does not exist.</h2>
               <h3> Try again! </h3>
                <Button onClick={onHomeButtonClick}>Return to Home Page</Button>
            </p>

        </div>

    )

}

export default NotFound

//styled components

const Button = styled.button`
background: transparent;
border-radius: 10px;
font-family: 'Della Respira', serif;
font-size: 14px;
border: 1px solid gray;
padding: 0.3rem;
`