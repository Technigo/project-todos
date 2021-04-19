import React from "react";
import {  useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import './RoundedButtonStyle.css'

export const RoundedButton = ({type, id}) => {
    const dispatch= useDispatch();

if(type==="ClearAll"){
return (<button
    className="rounded-button"
    type="button"
    onClick={() => dispatch(todos.actions.clearAll())}
  >
    Clear all
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
       