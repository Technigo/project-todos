import React from 'react'
import { useSelector } from "react-redux"

import { Title } from "../Header/Title"
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoRemoveall } from "./TodoRemoveall"


import styled from 'styled-components'

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <Article>

        <ArticleWrapper>
            <Title /> 

            <Section >
              <TodoRemoveall /> 
            </ Section >
      

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
`

const ArticleWrapper = styled.div `
     overflow: scroll;
     margin-top: 60px;
     text-align: center;
     width: 30%;
     height: 600px;
     background-color: white; 
     border-left: solid 20px transparent; 
     border-right: solid 20px transparent; 
     border-bottom: solid 20px #fff;
     box-shadow: 0 0 20px #2F4F4F;

     @media (max-width: 400px) {
        width: 80%;
        height: 800px;
      }

      @media (max-width: 768px) {
        width: 80%;
        height: 1000px;
      }
`

const Section = styled.section `
     display: block;
     text-align: right;
     margin-right: 30px;
     margin-bottom: 20px;  

     @media (max-width: 400px) {
        text-align: right;
        margin-left: 217px;
      }

      @media (max-width: 768px) {
        margin-right: 122px;
      }
  
`




