import styled from 'styled-components'

export const TodoTask = styled.li`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin: 5px 0 5px 0;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    padding: 10px 0 10px 0;
    background-color: rgba(234,224,213,0.3);
`

export const TaskCheckboxContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
`