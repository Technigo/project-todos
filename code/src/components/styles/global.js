import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    overflow-x: hidden;

    @media (min-width: 668px) {
        width: 50%;
        justify-items: center;
        margin: 0 auto;
    }
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
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
`
export const Title = styled.h1`
    font-family: 'Dongle', sans-serif;
    font-size: 5em;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
`
export const H2 = styled.h2`
    font-family: 'Dongle', sans-serif;
    font-size: 3em;
`