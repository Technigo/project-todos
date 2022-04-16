import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

import { list } from 'reducers/list'


const StyledList = styled.div `
.todo {
    display: flex;
    align-items: center;
    font-size: 22px;

}

.todo p {
    margin: 0;
}

.remove-button {
    margin-left: 10px;
    width: 10%;
    background-color: #FFFF99;
    border: none;
    font-size: 30px;
}
`
const StyledCheckbox = styled.label `
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 25px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #fff;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: lightgreen;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

`

//Listed todos +  tick box and remove button
export const TodoList = () => {
    const allTodos = useSelector((store) => store.list.todos);
    const dispatch = useDispatch()

    return (
        <StyledList>
        <div className='list'>
            {allTodos.map((todo, todoIndex) => (
                <div key={todo.id} todo={todo}>
                        <div className='todo'>
                                <StyledCheckbox>
                                    <label className='container'>
                                        <input type="checkbox" onChange={() => dispatch(list.actions.toggleTodo(todo))} />
                                        <span class="checkmark"></span>
                                    </label>
                                </StyledCheckbox>
                            <p>{todo.title}</p>
                            <button className='remove-button' type="button" onClick={() => dispatch(list.actions.removeTodo(todoIndex))}>-</button>
                        </div>
                </div>                    
            ))}
        </div>
        </StyledList>
    )
}