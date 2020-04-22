import React from 'react'
import { useSelector } from "react-redux"

import { Title } from "../Header/Title"
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"

import styled from 'styled-components'

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <Article>
            <Title /> 
      

            <TodoInput />
            {list.items.map((item, index) => (
                <TodoItem key={item} item={item} itemIndex={index} />
            ))}
      
        </Article>


    )

}

const Article = styled.div `
     text-align: center;
`


