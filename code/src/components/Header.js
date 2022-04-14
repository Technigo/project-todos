import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BackGround = styled.section`
    background: linear-gradient(#98BAE7, #B8E4F0);
    padding: 5px 24px;
    font-family: 'Poppins', sans-serif;
    border-radius: 0% 0% 100% 100%;
`
const OutterContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
const InnerContainer = styled.div`
    white-space: nowrap; 
`	
const DateStamp = styled.div`
    font-size: 2.8rem;
    font-weight: 500;
    color: black;
    display: inline-block;
` 
const YearMonthStamp = styled.div`
    display: inline-block;
    font-size: 1.02rem;
    font-weight: 500;
    margin-left: 0.3rem;
    line-height: 1.3rem; 
` 
const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
    margin-top: 1rem;
`
const CounterContainer = styled.div`
    margin-bottom: 1.5rem;
    text-align: center; 
`
const Header = () => {

    const allTasks = useSelector(store => store.tasks.items);
    const completedTasks = allTasks.filter(singleTask => singleTask.isComplete);
    const unCompletedTasks = allTasks.filter(singleTask => !singleTask.isComplete);


    let year = new Date().toLocaleDateString("en-US", {year: 'numeric'})
    let month = new Date().toLocaleDateString("en-US",{month: "short"})
    let date = new Date().toLocaleDateString("en-US",{day: "numeric"})
    let weekday = new Date().toLocaleDateString("en-US",{weekday: "long"})


    return (
        <BackGround>
            <Title>
                Daily reminder
            </Title>
            <OutterContainer>
                <InnerContainer>
                    <DateStamp>
                        <p>{date}</p>
                    </DateStamp>
                    <YearMonthStamp>
                        <p>{month}</p>
                        <p>{year}</p>
                    </YearMonthStamp>
                </InnerContainer>
                <p>{weekday}</p>
            </OutterContainer>
            <CounterContainer>
                <p>You have {allTasks.length} task(s) in total.</p>
                <p>Completed task(s) : {completedTasks.length}</p>
                <p>Uncompleted task(s) : {unCompletedTasks.length}</p>
            </CounterContainer>
        </BackGround>
    )
}

export default Header; 
