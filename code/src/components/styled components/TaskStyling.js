import styled from 'styled-components'

export const TodoTask = styled.li`
    width: 100%;
    margin: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 15px 5px 15px 0;
`

export const RemoveTodo = styled.button`
    border-radius: 50%;
    background-color: whitesmoke;
    // background-color: #a5aefa;
    border: none;
`