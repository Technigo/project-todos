import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { ClearButton } from './ClearButton'
import styled from 'styled-components'

export const Header = () => {
    const tasks = useSelector((state) => state.todos.items)

    return (
        <Wrapper>
            <WrapperLeft>
                <BoldText>Todo</BoldText>
                <RegularText>{moment().format("MMM Do")}</RegularText>
            </WrapperLeft>
            <WrapperRight>
                <RegularText>{tasks.length} Tasks</RegularText>
                <ClearButton />
            </WrapperRight>
        </Wrapper>)
}

const Wrapper = styled.section`
display:flex;
flex-direction: row;
justify-content:space-between; 
align-items: center; 
height: auto;
padding: 4%;
background: #e1f2fb;
border-bottom: 2px solid #d1d1e0;
`;
const BoldText = styled.h1`
font-family: "Roboto", sans-serif;
margin:0px;
`;

const RegularText = styled.h4`
font-family: "Roboto", sans-serif;
margin:0px;
padding: 10px 0 10px 0;
color: #7575a3;
`;
const WrapperLeft = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-end;

`;

const WrapperRight = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

