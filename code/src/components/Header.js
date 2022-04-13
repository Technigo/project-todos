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
    // font-size: 1rem;
    // font-weight: 500;
    color: red;
    display: inline-block;
` 
const YearMonthStamp = styled.div`
    display: inline-block;
    // font-size: 1.02rem;
    // font-weight: 500;
    // margin-left: 0.3rem; 
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
            <h1>
                Task-it
            </h1>
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
                <div>
                    <p>You have {allTasks.length} task(s) in total.</p>
                    <p>Completed task(s) : {completedTasks.length}.</p>
                    <p>Uncompleted tasks(s) : {unCompletedTasks.length}.</p>
                </div>
            
        </>
    )
}

export default Header; 
