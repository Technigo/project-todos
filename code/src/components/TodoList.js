import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

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
   const Todo = styled.p `
    margin:5px;
    padding: 5px;` 

   const Removebutton = styled.button `
    border: none;
    background-color: white;
    `
   const Checkbox = styled.input `
    border-radius: 50%;
    width:20px;
   `
   const Delete =styled.img`
    width:15px;`
    return (
        <>
       
        <section> 
            {items.map((item) => (
                <div className ="flex-item" key={item.id}>
                   
                    <Checkbox type="checkbox"checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/> 
                    <Todo>{item.text}</Todo>
                    <Removebutton onClick={() => onDeleteTodo(item.id)}><Delete src="assets/delete.png"/></Removebutton>
                </div>
            ))}
        </section>{/*// mapping over item to show the text inputs*/}
        
       
        
        
        </>
    )
   
}

export default TodoList