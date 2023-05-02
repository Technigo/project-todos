import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    // border: solid 1px red;

    @media (min-width: 668px) {
        width: 50%;
        justify-items: center;
        margin: 0 auto;
    }
`

// export const Background = styled.div`
//     width: 100vw;
// `

export const Button = styled.button`
    border: none;
    // background: yellow;
    color: blue;
    font-family: 'Satoshi', sans-serif;
    background: white;

    &:hover {
        color: blue;
    }
`
export const AddButton = styled(Button)`
    font-family: Roboto;
    font-size: 2em;
    font-family: 'Satoshi', sans-serif;

    // &:hover {
    //     color: blue;
    // }
`

export const DeleteButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    margin: 0;
    font-size: 2em;
    font-family: 'Satoshi', sans-serif;
    background: white;
`
export const Title = styled.h1`
    font-size: 2em;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: rightdk;
    align-items: center;
    font-family: 'Satoshi', sans-serif;
    color: blue;
    width: 100%;
    margin: 0;
`
export const H2 = styled.h2`
    font-size: 2em;
    font-family: '  Satoshi';
    color: blue;
`