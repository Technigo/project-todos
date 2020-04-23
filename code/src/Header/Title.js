import React from "react";
import { TodoSummary } from "../components/TodoSummary"
import styled from 'styled-components'



export const Title = () => {

    return (

        <Header>
            <Section>
            <HeaderText>My Tasks</HeaderText>
            <TodoSummary /> 
             </Section>
        </Header>

    )


}

const Header = styled.header` 
   width: 100%;
   padding: 0px;
`
const Section = styled.section` 
   margin: 0px;
`

const HeaderText = styled.h2`
    margin-bottom: 0px;
    margin-left: 16px;
    text-align: left;
    font-size: 30px;
    font-family: Tahoma, Geneva, sans-serif;
`