import React from "react";
import styled from "styled-components"
import moment from 'moment';
import { useSelector } from 'react-redux'

const TheHeader = styled.div `
    margin-top: 20px;
    border: 3px solid red;
`
const DateText = styled.p`
    color: grey;
`

const TodoCounter = () => {
    const items = useSelector((store) => store.todos.items)
    console.log("items?", items)

    return (
        <TheHeader>
            <h1>Todo Today</h1>
            <h2>{items.length}</h2>
            <DateText>{moment().format('MM/DD/YYYY')}</DateText>
            <p>Complete:</p>
            <p>Incomplete:</p>
        </TheHeader>
    )
}

export default TodoCounter