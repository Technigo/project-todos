import React from "react";
import { TodoSummary } from "../components/TodoSummary"
import styled from 'styled-components'
import moment from 'moment'



export const Title = (today) => {

    return (

        <Header>

 
            <Section>
               <HeaderText>My Tasks</HeaderText>
               <Hedertextdate>{moment(today).format('MMM Do YYYY')}</Hedertextdate>
            </Section>
    
            <TodoSummary /> 

        </Header>

    )


}

const Header = styled.header` 
   width: 100%;
   padding-top: 0px;
`

const Section = styled.section` 
   display: flex;
`

const HeaderText = styled.h2`
    display: inline-block;
    margin-left: 30px;
    margin-right: 160px;
    margin-top: 40px;
`
const Hedertextdate = styled.h2`
    margin-top: 20px;
    font-size: 15px;

    @media (max-width: 400px) {
        display: none;
      }

    @media (max-width: 768px) {
        margin-top: 40px;
        margin-left: 122px;
        font-size: 20px;
      }
`