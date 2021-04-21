import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderTitleDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
` 

export const MainHeader = styled.h1`
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 0;
`

export const HeaderDate = styled.p`
    text-align: center;
    color: white;
    font-size: 12px;
    margin-bottom: 25px;
`
export const HeaderCounterButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
`

export const CompletedTasksText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: white;
`

export const AllDoneButton = styled.button`
    width: fit-content;
    padding: 4px;
    font-size: 12px;
    margin-bottom: 15px;
    border: none;
    border-radius: 10px;
    background-color: whitesmoke;
    color: black;
    &:hover {
        transform: scale(1.1);
    };
`




