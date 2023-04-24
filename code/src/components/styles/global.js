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

export const Background = styled.div`
    width: 100%;
    
    @media (min-width: 668px) {
        width: 50%;
        justify-items: center;
        margin: 0 auto;
    }
`

export const Button = styled.button`
    border: none;
    background: yellow;
    color: black;
    font-family: Garamond;

    &:hover {
        color: yellow;
    }
`
export const AddButton = styled(Button)`
    font-family: Garamond;

    &:hover {
        color: yellow;
    }
`

export const DeleteButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    margin: 0;
    font-size: 1em;
    font-family: Garamond;

`
export const Title = styled.h1`
    font-size: 1em;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Garamond;
    width: 100%;
    margin: 0;
`
export const H2 = styled.h2`
    font-size: 2em;
    font-family: Garamond;

`