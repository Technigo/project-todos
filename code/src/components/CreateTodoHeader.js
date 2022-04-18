import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
    padding:20px;
    
`
const HeaderDiv = styled.div`
    display: flex;
    padding:10px;
`

const Title = styled.h1`
    
`

const TitleDiv = styled.div`
    display: flex;
    justify-content:center;
    padding:10px;
    text-align:center;
`


export const CreateTodoHeader = () => {
    return (
        <Header>
            <HeaderDiv>
                <Link to="/">
                    🔙
                </Link>
            </HeaderDiv>
            <TitleDiv>
                <Title>Add New Task</Title>
            </TitleDiv>
        </Header>
    )
}