import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Item } from './Item.js'
import { AddTodo } from 'components/AddTodo'
import { Summary } from 'components/Summary'


const ListContainer = styled.ul`
    display: flex; 
    width: 100%;
    flex-direction: column;
    background-color: #e7dfd5;
    list-style-type: none;
    min-height: 100vh;
    margin: 0;
    padding-left: 0;
`

export const List = () => {
    const items = useSelector(store => store.todos.items)

    return (
        <ListContainer>
            {items.map((item) => (
            <Item key={item.id} item={item}></Item>
            ))}   
         <Summary />      
        <AddTodo />  
        </ListContainer>
    )
}