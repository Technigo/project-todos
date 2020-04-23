import React from 'react'
import { useSelector } from "react-redux"

import { Title } from "../Header/Title"
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"


import styled from 'styled-components'
import img from '../assets/water.jpg'


// import img from './img/bg.gif';

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <Article>

        <ArticleWrapper>
            <Title /> 
      

            <TodoInput />
            {list.items.map((item, index) => (
                <TodoItem key={item} item={item} itemIndex={index} />
            ))}
        
        </ArticleWrapper>
    
        </Article>


    )

}

const Article = styled.div `
     display: flex;
     justify-content: center;
     text-align: center;
     width: 100%;
     height: 800px;
     background-image: url(${img});
     background-size: cover;
     
`

const ArticleWrapper = styled.div `
     margin-top: 60px;
     text-align: center;
     width: 30%;
     height: 600px;
     background-color: white;
     box-shadow: 10px 10px;
     
`




