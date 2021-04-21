import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const HeaderTitleDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const MainHeader = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0;
`

export const HeaderDate = styled.p`
    text-align: center;
    color: white;
    font-size: 14px;
    margin-bottom: 25px;
`
export const HeaderCounterButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
`

export const CompletedTasksText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: white;
`

export const AllDoneButton = styled.button`
    width: fit-content;
    padding: 4px;
    margin-bottom: 15px;
    // border: 1px solid black;
    border: none;
    border-radius: 10px;
    background-color: whitesmoke;
    color: black;
    &:hover {
        transform: scale(1.1);
    };
`




