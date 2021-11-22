import React from "react";
import styled from "styled-components"
import moment from 'moment';
import { useSelector } from 'react-redux'

// Styled components
const TodoH1 = styled.h1`
    color: #422117;
    font-family: 'Pacifico', cursive;
    font-size: 3rem;
    margin-top: 10px;
    margin-bottom: 0;
    @media (max-width: 450px) {
        font-size: 2.6rem;
    }
`
const TodoSpan = styled.span`
    color: #422117;
    font-size: 4rem;
    margin-top: 10px;
    margin-bottom: 20px;
    @media (max-width: 450px) {
        font-size: 3rem;
    }
`
const TheHeader = styled.div `
    padding-top: 20px;
`
const DateText = styled.p`
    color: grey;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9rem;
    @media (max-width: 450px) {
        font-size: 0.7rem;
    }
`
const CompleteP = styled.p`
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
    @media (max-width: 450px) {
        font-size: 0.8rem;
    }
`

const TodoHead = () => {
    const items = useSelector((store) => store.todos.items)
    const complete = useSelector((store) => store.todos.items.filter(item => item.isComplete).length)
    const incomplete = useSelector((store) => store.todos.items.filter(item => !item.isComplete).length)

    return (
        <TheHeader>
            <TodoH1>Todo Today: <TodoSpan>{items.length}</TodoSpan></TodoH1>
            <DateText>{moment().format('YYYY/MM/DD')}</DateText>
            <CompleteP>Incomplete: {incomplete} 
            {incomplete >! items.length && <span> &#10006; </span>}
            &nbsp;&nbsp; 
            Complete: {complete}
            {complete === items.length && <span> &#10004; </span>}
            </CompleteP>
        </TheHeader>
    )
}

export default TodoHead