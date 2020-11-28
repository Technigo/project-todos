import styled from 'styled-components';

export const FormContainer = styled.article`
    background-color: rgba(255, 255, 255, .8);
    margin: 10px;
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.div`
    padding: 10px;
`;

export const Input = styled.input`
    border: none;
    font-family: 'Open Sans', sans-serif;
    color: rgb(0, 40, 77);
    padding: 20px;
    font-size: 17px;
    background-color: rgb(252, 228, 215);
    border-radius: 3px;
    &::-webkit-input-placeholder {
        color: rgb(36, 90, 92);
        font-weight: 400;
        font-size: 17px;
    };
`;

export const ButtonInput = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 2px solid rgb(36, 90, 92);
    font-size: 20px;
    color: rgb(36, 90, 92);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 20px;
    transition: all 150ms;
    cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255);
        }
`;