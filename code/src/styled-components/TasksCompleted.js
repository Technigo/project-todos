import styled from 'styled-components';

export const CompletedContainer = styled.article`
    background-color: rgba(255, 255, 255, .8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px 0px;
    width: 100%;
 `; 

export const Container = styled.div`
    width: 250px;
`;

export const CompletedText = styled.p`
    color: rgb(36, 90, 92); 
    font-family: 'Open Sans', sans-serif;
    font-size: 21px;
    padding: 10px; 
    margin: 0; 
`;

export const CheckTickIcon = styled.img`
    height: 65px;
    margin-top: 10px;
`;