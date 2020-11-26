import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #efebe9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TodoListContainer = styled.ul`

`
export const ListItem = styled.li`
    align-self: flex-start;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
    color: #3f3f3f;
    background-color: #b8f4ff;
    list-style: none;  
    display: flex;  
`;

