import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoList =()=> {
const items = useSelector ((store) => store.todos.items)
const taskNumber = useSelector((store) => store.todos.items.length) // variable to obtain length of to-dos list
const completed = useSelector ((store) => store.todos.items.isComplete)
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
   padding: 15px;` 

   const Removebutton =styled.button `
   border-radius: 5px;
   `
    return (
        <>
        {/*<div>{taskNumber} tasks</div> shows the number of tasks in total*/}
        <section> 
            {items.map((item) => (
                <div className ="flex-item" key={item.id}>
                   
                    <input type="checkbox"checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/> 
                    <Todo>{item.text}</Todo>
                    <Removebutton onClick={() => onDeleteTodo(item.id)}>Remove</Removebutton>
                </div>
            ))}
        </section>{/*// mapping over item to show the text inputs*/}
        
       
        
        
        </>
    )
   
}

export default TodoList