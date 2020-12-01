import styled from 'styled-components';

export const InputContainer = styled.div`
    padding: 10px;
`;

export const InputHeading = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 18px; 
`;

export const Input = styled.input`
    border: none;
    color: rgb(0, 40, 77);
    padding: 10px;
    font-size: 14px;
    background-color: rgb(129,170,113, .8);
    border-radius: 3px;
`;

export const InputButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgb(129,170,113);
    font-size: 20px;
    color: rgb(129,170,113);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 15px;
    transition: all 200ms;
    cursor: pointer;
`;