import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, .8);
    padding: 10px 0px;
`;

export const ToDo = styled.h1`
    font-size: 55px;
    text-align: center;
    font-family: 'Elsie', cursive;
    font-weight: 500;
    margin: 10px 0px;
    color: rgb(36, 90, 92);    
    border-bottom: 2px solid rgb(36, 90, 92);
`;

export const DateCompletedContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0px;
`; 

export const TodaysDate = styled.p`
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    padding: 5px;
    margin: 0;
    color: rgb(36, 90, 92);
`;