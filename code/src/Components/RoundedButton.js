import React from "react";
import {  useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import './RoundedButtonStyle.css'

export const RoundedButton = ({type, id}) => {
    const dispatch= useDispatch();

if(type==="CompleteAll"){
return (<button
    className="rounded-button"
    type="button"
    onClick={() => dispatch(todos.actions.completeAll())}
  >
    Complete all
  </button>)
} 

if(type==="ClearAll"){
    return (<button
        className="rounded-button"
        type="button"
        onClick={() => dispatch(todos.actions.clearAllCompleted())}
      >
        Clear all completed
      </button>)
    } 

return (
    (<button
        className="rounded-button"
        type="button"
        onClick={() => dispatch(todos.actions.removeTodo({task: id}))}
      >
        Remove
      </button>)
)}
       