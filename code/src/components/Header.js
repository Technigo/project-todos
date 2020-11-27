import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'

import moment from 'moment'
import swal from 'sweetalert'

import { Container, Background , Text, DateText, SectionOne, SectionTwo, TaskCount, Button } from '../styling/HeaderStyling'

export const Header = () => {
    const dispatch = useDispatch()
    
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter((item) => item.completedTask)

    const handleRemoveAll = () => {
      swal({
        title:'Are you sure',
        text:'Do you really want to delete all todos?',
        buttons:true, 
        dangerMode: true,
      })
        .then((willDelete) => {
            if(willDelete) {
              dispatch(todos.actions.removeAll())
            }
        })   
    }
    return (
    <Container>  
      <Background background ='#14274e'>
        <SectionOne>
          <Text>Todo</Text> 
            <DateText>{moment().format('MMM Do')} </DateText>
        </SectionOne>    
          <SectionTwo>
            <TaskCount> {completedItems.length}/{items.length} Done</TaskCount>
              <Button
                className='remove-all'
                type='button'
                onClick ={handleRemoveAll}>
                Delete All!
              </Button>
          </SectionTwo>
      </Background >
    </Container>      
  )
}