import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OutterDateContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
//StyleContainer is a parent element that forces the child elements to appear on one line. 
const StyleContainer = styled.div`
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
` 
const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
    // border: 1px solid black;
    margin: 1.5rem 4rem;
    background: #99a8bb;
`
const CounterWrapper = styled.div`
    margin-bottom: 1.5rem;
    border-bottom: 1px solid black;
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
        <>
            <Title>
                Task-it
            </Title>
            <OutterDateContainer>
                <StyleContainer>
                    <DateStamp>
                        <p>{date}</p>
                    </DateStamp>
                    <YearMonthStamp>
                        <p>{month}</p>
                        <p>{year}</p>
                    </YearMonthStamp>
                </StyleContainer>
                <p>{weekday}</p>
            </OutterDateContainer>
                <CounterWrapper>
                    <p>You have {allTasks.length} task(s) in total.</p>
                    <p>Completed task(s) : {completedTasks.length}.</p>
                    <p>Uncompleted tasks(s) : {unCompletedTasks.length}.</p>
                </CounterWrapper>
            
        </>
    )
}

export default Header; 
