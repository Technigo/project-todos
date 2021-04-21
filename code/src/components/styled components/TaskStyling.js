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
    background-color: whitesmoke;
`
export const TaskCheckboxContainer = styled.div`
    justify-content: flex-start;
`

export const TaskDate = styled.p`
    font-size: 12px;
`

export const RemoveTodo = styled.button`
    border-radius: 50%;
    background-color: white;
    border: none;
`