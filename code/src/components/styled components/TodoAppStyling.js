import styled from 'styled-components'

export const MainAppContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 90%;
    max-width: 450px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    background-color: white;
    justify-content: space-between;
    word-break: break-word;
`
export const AppHeader = styled.div`
    background-color: rgba(34,51,59, 0.8);
    width: 100%;
    margin-bottom: 25px;
    border-radius: 5px 5px 0 0;
`

export const FormListContainer = styled.div`
    width 95%;
`

export const TotalTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`