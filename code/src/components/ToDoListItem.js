import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { BsTrash } from 'react-icons/bs'

import todos from 'reducers/todos'

const ToDoListItemArticle = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 10px 2px;
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 5px;

    .left-side {
        display: flex;
        align-items: center;
    }
    
    button {
      background: none;
      border: none;
    }
`

const CustomCheckbox = styled.label`
    display: flex;
    position: relative;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    span {
      height: 1rem;
      width: 1rem;
      background-color: #eee;
    }

    :hover input ~ span {
      background-color: #ccc;
    }

    input:checked ~ span {
      background-color: teal;
    }

    span:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    input:checked ~ span:after {
      display: block;
    }

    span:after {
        left: 0.25rem;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

const ToDoListItem = ({ itemIndex, id, text, isComplete }) => {

    const dispatch = useDispatch()

    const onDeleteToDo = (index) => {
        dispatch(todos.actions.deleteItem(index))
    }

    const onToggleComplete = (id) => {
        dispatch(todos.actions.toggleComplete(id))
    }

    return (
        <ToDoListItemArticle>
            <div className="left-side">
                <CustomCheckbox>
                    <input
                        type="checkbox"
                        checked={isComplete}
                        onChange={() => onToggleComplete(id)} />
                    <span></span>
                    {text}
                </CustomCheckbox>
            </div>
            <div>
                <button
                    onClick={() => onDeleteToDo(itemIndex)}>
                    <span role="img" aria-label="delete">
                        <BsTrash />
                    </span>
                </button>
            </div>
        </ToDoListItemArticle>
    )
}

export default ToDoListItem