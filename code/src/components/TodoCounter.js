import React from "react";
import styled from "styled-components"
import moment from 'moment';
import { useSelector } from 'react-redux'

const TodoH1 = styled.h1`
    color: #422117;
    font-family: 'Pacifico', cursive;
    font-size: 3rem;
`
const TheHeader = styled.div `
    padding-top: 20px;
`
const DateText = styled.p`
    color: grey;
`

const TodoCounter = () => {
    const items = useSelector((store) => store.todos.items)
    const complete = useSelector((store) => store.todos.items.filter(item => item.isComplete).length)
    const incomplete = useSelector((store) => store.todos.items.filter(item => !item.isComplete).length)
    
    console.log("items?", items.filter(item => item.isComplete).length)  //// CONSOLE LOGGGGGGGG!!!!!

    return (
        <TheHeader>
            <TodoH1>Todo Today</TodoH1>
            <h2>{items.length}</h2>
            <DateText>{moment().format('YYYY/MM/DD')}</DateText>
            <p>Incomplete: {incomplete} 
            {incomplete >! items.length && <span> &#10006; </span>}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Complete: {complete}
            {complete === items.length && <span> &#10004; </span>}
            </p>
        </TheHeader>
    )
}

export default TodoCounter