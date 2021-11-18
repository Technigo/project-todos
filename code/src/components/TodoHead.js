import React from "react";
import styled from "styled-components"
import moment from 'moment';
import { useSelector } from 'react-redux'

const TodoH1 = styled.h1`
    color: #422117;
    font-family: 'Pacifico', cursive;
    font-size: 3rem;
    margin-top: 10px;
    margin-bottom: 0;
`
const TodoH2 = styled.h2`
    color: #422117;
    font-size: 4rem;
    margin-top: 10px;
    margin-bottom: 20px;
`
const TheHeader = styled.div `
    padding-top: 20px;
`
const DateText = styled.p`
    color: grey;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9rem;
`
const CompleteP = styled.p`
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
`

const TodoHead = () => {
    const items = useSelector((store) => store.todos.items)
    const complete = useSelector((store) => store.todos.items.filter(item => item.isComplete).length)
    const incomplete = useSelector((store) => store.todos.items.filter(item => !item.isComplete).length)
    
    console.log("items?", items.filter(item => item.isComplete).length)  //// CONSOLE LOGGGGGGGG!!!!!

    return (
        <TheHeader>
            <TodoH1>Todo Today</TodoH1>
            <TodoH2>{items.length}</TodoH2>
            <DateText>{moment().format('YYYY/MM/DD')}</DateText>
            <CompleteP>Incomplete: {incomplete} 
            {incomplete >! items.length && <span> &#10006; </span>}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Complete: {complete}
            {complete === items.length && <span> &#10004; </span>}
            </CompleteP>
        </TheHeader>
    )
}

export default TodoHead