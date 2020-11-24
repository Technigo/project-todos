import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Container, Text, DateText, Section, TaskCount } from '../styling/HeaderStyling'
import styled from 'styled-components'




export const Header = () => {
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter((item) => item.completedTask)

    return (
        <Container background ='#14274e'>
            <Text>Todo</Text> 
            <DateText>{moment().format("MMM Do ")} </DateText>
            <Section>
            <TaskCount>{completedItems.length} tasks</TaskCount>
            </Section>
        </Container>
    )
}