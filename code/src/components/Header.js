import React from 'react'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderSection = styled.section`
    margin: 0;
    height: 120px;
    display: flex;
    justify-content: space-between;
`
const LeftWrapper = styled.section`
    margin: 20px;
    display: flex;
    align-items: center;
`
const RightWrapper = styled.section`
    margin: 20px;
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
export const Header = () => {

    const amountOfTasks = useSelector((store) => store.tasks.taskList.length)

    return (
        <HeaderSection>
            <LeftWrapper>
                <AppTitle>Todo</AppTitle>
           </LeftWrapper>
           <RightWrapper>
                {/* <DateTitle>Date</DateTitle> */}
                <AmountTitle>{amountOfTasks} tasks</AmountTitle>
            </RightWrapper>
        </HeaderSection>
    )
}