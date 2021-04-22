
import React from 'react'
import { useDispatch } from 'react-redux'


import { todos } from '../reducers/todos'

const myArray = [
  {id: "1", text: "Call Mum", isComplete: false},
  {id: "2", text: "Clean the windows", isComplete: false},
  {id: "3", text: "Write that email to that old friend", isComplete: false},
  {id: "4", text: "Pick my eyebrown", isComplete: false},
  {id: "5", text: "Compare electric companies", isComplete: false},
  {id: "6", text: "Clean the fridge", isComplete: false},
]

const randomTodo = myArray[Math.floor(Math.random()*myArray.length)];

export function TodoSuggestions(){
  return{
    name: todos,
    payload: {
      newTodo: {randomTodo}
    }
  }
}

