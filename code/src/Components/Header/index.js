import React from "react";
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { todo } from "Reducers/todo";
import styled from 'styled-components/macro';

const HeaderContainer = styled.section`
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    color: white;   
    background: rgb(0 0 0 / 58%);
    font-family: 'Roboto Condensed', sans-serif;
    width: 90%;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    @media (min-width: 768px){
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
`

const HeaderBodyContainer = styled.section`
    color: white;
    border-radius: 2px;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

const LeftContainer = styled.div`
    padding: 0 1rem;
    `

const RigthContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: self-end;
    `

const ButtonHeader = styled.button`
    color: white;
    background: black;
    border: none;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.8rem;
    @media (min-width: 768px){
       font-size: 1.1rem;
    }
    @media (min-width: 992px) {
        font-size: 1.3rem;
    }
    `

const HeaderMainTitle = styled.h1`
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 0.2rem 0;
    @media (min-width: 768px){
       font-size: 2.2rem;
    }
    @media (min-width: 992px) {
        font-size: 2.5rem;
    }
    `

const HeaderSubTitle = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin: 1.2rem 0 0 0;
    @media (min-width: 768px){
       font-size: 1.3rem;
    }
    @media (min-width: 992px) {
        font-size: 1.5rem;
    }
    `

export const Header = () => {
    const dispatch = useDispatch();
    const date = useSelector(store => store.todo.today)
    const tasks = useSelector(store => store.todo.tasks)

    const handleOnClickClear = () => {
        dispatch(todo.actions.clearAllTasks())
    }

    const handleOnClickComplete = () => {
        dispatch(todo.actions.completeAllTasks())
    }


    return (
        <HeaderContainer>
            <HeaderMainTitle>My day</HeaderMainTitle>
            <HeaderBodyContainer>
                <LeftContainer>
                    <HeaderSubTitle>{moment(date).format('dddd')}, {moment(date).format('ll')}</HeaderSubTitle>
                    <HeaderSubTitle>{tasks.length} tasks</HeaderSubTitle>
                </LeftContainer>
                <RigthContainer>
                    <ButtonHeader onClick={handleOnClickClear}>Clear All</ButtonHeader>
                    <ButtonHeader onClick={handleOnClickComplete}>Complete All</ButtonHeader>
                </RigthContainer>
            </HeaderBodyContainer>
        </HeaderContainer>
    )

}
