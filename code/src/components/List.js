import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Item } from './Item.js'
import { AddTodo } from 'components/AddTodo'
import { Summary } from 'components/Summary'
import { Header } from 'components/Header'

const Container = styled.div`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 700px) {
        max-width: 450px;
    }
`

const ListContainer = styled.ul`
    display: flex; 
    width: 100%;
    flex-direction: column;
    background-color: #f2f0f0;
    list-style-type: none;
    min-height: 100vh;
    margin: 0;
    padding-left: 0;
    box-shadow: 10px 5px 5px grey;

    @media (min-width: 700px) {
        margin-top: 40px;
    }
`

export const List = () => {
    const items = useSelector(store => store.todos.items)

    return (
        <Container>
            <ListContainer>
                <Header />
                    {items.map((item) => (
                <Item key={item.id} item={item}></Item>
                ))}   
                <Summary />      
                <AddTodo />  
            </ListContainer>
        </Container>
    )
}