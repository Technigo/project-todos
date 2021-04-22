
import React from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import { todos } from '../reducers/todos'

const myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

const randomItem = myArray[Math.floor(Math.random()*myArray.length)];


export const TodoSuggestions =() => {
    const dispatch = useDispatch()

    const onItemAdd = (event) => {
            event.preventDefault();
            dispatch(
                todos.actions.addTodoItem({
                    newTodo: {
                    id:uniqid(),          
                    text: {randomItem},
                    isComplete: false
                },
            })
                    
          );
    return (
        <>
        <button type="button" onClick={onItemAdd}>
                        ADD 
        </button>
        
        </>    
    )
}
}
