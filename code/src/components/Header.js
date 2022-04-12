import React from "react";
import styled from "styled-components";

// import moment from "moment";

//StyleContainer is a parent element that forces the child elements to appear on one line.  
const OutterContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;

`

const StyleContainer = styled.div`
    white-space: nowrap; 
`	

const DateStamp = styled.div`
    font-size: 3rem;
    font-weight: 500;
    color: red;
    display: inline-block;

` 
const TimeStamp = styled.div`
    display: inline-block;
    font-size: 1.02rem;
    font-weight: 500;
    margin-left: 0.3rem; 
    

` 

const Header = () => {

    // const date = moment().format('LLLL');

    let year = new Date().toLocaleDateString("en-US", {year: 'numeric'})
    let month = new Date().toLocaleDateString("en-US",{month: "short"})
    let date = new Date().toLocaleDateString("en-US",{day: "numeric"})
    let weekday = new Date().toLocaleDateString("en-US",{weekday: "long"})


    return (
        <>
            <h1>
                Task-it
            </h1>
            <OutterContainer>
                <StyleContainer>
                    <DateStamp>
                        <p>{date}</p>
                    </DateStamp>
                    <TimeStamp>
                        <p>{month}</p>
                        <p>{year}</p>
                    </TimeStamp>
                </StyleContainer>
                <p>{weekday}</p>
            </OutterContainer>

        </>
    )
}

export default Header; 