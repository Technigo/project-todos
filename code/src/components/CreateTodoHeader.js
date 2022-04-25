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
const StyledLink  = styled(Link)`
&:focus,
&:hover,
&:visited,
&:link,
&:active {
  text-decoration: none;
}
`
const BackButton = styled.button`
border-radius: 10px;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: inline-flex;
align-items: center;
justify-content: center;
width: contend-fit;
padding: 10px;
border: none;
fill: currentColor;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
overflow: hidden;
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
background-color: #017DFF;
color: #fff;
`


export const CreateTodoHeader = () => {
    return (
        <Header>
            <HeaderDiv>
                <StyledLink to="/">
                <BackButton type='submit'> &lt; Back</BackButton>
                </StyledLink>
            </HeaderDiv>
            <TitleDiv>
                <Title>Add New Task</Title>
            </TitleDiv>
        </Header>
    )
}