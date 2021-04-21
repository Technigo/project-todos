import styled from 'styled-components'

export const MainAppContainer = styled.div`
    border: 1px solid black;
    width: 80%;
    max-width: 450px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    background-color: white;
    justify-content: space-between;
    word-break: break-word;
`
export const AppHeader = styled.div`
    background-color: rgba(123,104,238,1);
    width: 100%;
    margin-bottom: 25px;
`

export const FormListContainer = styled.div`
    width 95%;
`

export const TotalTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`