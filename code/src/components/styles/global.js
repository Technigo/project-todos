import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
`

export const Button = styled.button`
    border: none;
    background: none;
    color: black;

    &:hover {
        color: red;
    }
`
export const AddButton = styled(Button)`
    &:hover {
        color: green;
    }
`

export const DeleteButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    margin: 0;
`

export const HeadLine = styled.h1`
    font-family: 'Dongle', sans-serif;
    font-size: 5em;
    margin: 0;
`