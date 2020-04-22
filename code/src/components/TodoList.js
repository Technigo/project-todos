import React from 'react'
import { useSelector } from "react-redux"


import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoSummary } from "./TodoSummary.js"

import styled from 'styled-components'

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <Article>

            <TodoInput />
            {list.items.map((item, index) => (
                <TodoItem item={item} itemIndex={index} />
            ))}
            <TodoSummary /> 

        </Article>


    )

}

const Article = styled.div `
     text-align: center;
`


