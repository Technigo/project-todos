import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import moment from 'moment'

import Trash from '../assets/trash-can.png'
import { Container, Text, DateText, Section, SectionOne, TaskCount, Button } from '../styling/HeaderStyling'

export const Header = () => {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter((item) => item.completedTask)

    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
    }

    return (
        <Container background ='#14274e'>
            <SectionOne>
                <Text>Todo</Text> 
                <DateText>{moment().format("MMM Do ")} </DateText>
            </SectionOne>    
                <Section>
                    <TaskCount>{completedItems.length} tasks</TaskCount>
                        <Button
                          className="remove-all"
                          type="button"
                          onClick ={handleRemoveAll}>
                        Clear All!
                        </Button>
                </Section>
        </Container>
    )
}