import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from 'react-router-dom';

const Pageheader = styled.header`
    width:90%;
    max-width: 500px;
    padding:20px; 
`
const Headerdiv = styled.div`
    
    display:flex;
    align-items: center;
    justify-content: space-between;
`


const Title = styled.h1`
    margin:0;
    padding:0;
`
const Text = styled.p`
    margin:0;
    padding:0;
`


const PlusButton = styled.span`
border-radius: 50%;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: flex;
align-items: center;
justify-content: center;
width: 56px;
height: 56px;
padding: 0;
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
font-size:28px;
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





export const Header = () => {
    
    const date = moment().format('LL')
    return(
        <Pageheader>
            <Headerdiv>
                <Title>TodoApp</Title>
                <StyledLink to={'/create_todo'}>
                    <PlusButton> &#x0002B; </PlusButton>
                </StyledLink>
            </Headerdiv>
            <Headerdiv>
                <Text>{date}</Text>
            </Headerdiv>
            
        </Pageheader>
    )
}