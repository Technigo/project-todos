import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {

    const amountOfTasks = useSelector((store) => store.tasks.taskList.length)

    return (
        <HeaderSection>
            <LeftWrapper>
                <AppTitle>Todo</AppTitle>
           </LeftWrapper>
           <RightWrapper>
                <AmountTitle>{amountOfTasks} tasks</AmountTitle>
            </RightWrapper>
        </HeaderSection>
    )
}

const HeaderSection = styled.section`
    margin: 20px 20px 20px ;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin: 50px 140px 20px 140px;
    }
    @media (min-width: 992px) {
        width: 600px; 
        margin-top: 80px;
    }
`
const LeftWrapper = styled.section`
    display: flex;
    align-items: center;
`
const RightWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AppTitle = styled.h1`
    font-size: 60px;
    margin: 0;
    color: #0F1A84;
`
const AmountTitle = styled.p`
    color: #0F1A84;
    font-size: 18px;
    margin: 4px 10px 4px 4px;
`
