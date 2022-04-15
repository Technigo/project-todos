import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 375px;
    margin: 0 auto;
`

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StartButton = styled.button`
    padding: 6px;
    width: 300px;
    border-radius: 10px;
    margin: 100px 0 25px 0;
    border: solid 3px #4C4EF9;
    background-color: rgb(216, 216, 239);
    color: #4C4EF9;
    font-family: 'Acme', sans-serif;
    font-size: 16px;
    cursor: pointer;

    &:active {
        background-color: #4C4EF9;
        color:white;
    }    
    `


const NotFound = () => {
    const navigate = useNavigate()

    const onButtonClick = () => {
        navigate("/main")
    }


    return (
        <section>
            <Container>
                <WrapperDiv>
                    <p>This page does not exist...</p>
                    <StartButton onClick={onButtonClick}>
                        Back to your planning
                    </StartButton>
                </WrapperDiv>
            </Container>
        </section>
    )
}

export default NotFound