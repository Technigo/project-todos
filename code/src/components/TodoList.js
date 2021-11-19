import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'


const TodoList =()=> {
const items = useSelector ((store) => store.todos.items)
const dispatch = useDispatch()

const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
    }//
const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
    }
    
   //styling
   
   const Checkbox = styled.input `
    width: 20px;
    margin: 0 20px;
   
   `  
   const TodoItemText = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 2;
   `
   const Todo = styled.p `
    font-size: 14px;
    font-weight: bold;
    margin:0;
   ` 
    const Removebutton = styled.button `
    border: none;
    background-color: grey;
    padding: 8px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: white;
    width: 65px;
    margin-right: 10px;
   `
    const Date =styled.p `
    margin:0;
    font-size: 10px;
   `
    const Container = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
    `
   
    return (
        <>
       
        <section> 
            {items.map((item) => (
                <Container key={item.id}>
                    <Checkbox type="checkbox"checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/> 
                        <TodoItemText>
                            <Todo>{item.text}</Todo>
                            <Date>Created at: {moment().calendar()}</Date>
                        </TodoItemText>
                    <Removebutton onClick={() => onDeleteTodo(item.id)}>Delete</Removebutton>
                </Container>
            ))}
        </section>{/*// mapping over item to show the text inputs*/}
        
       
        
        
        </>
    )
   
}

export default TodoList