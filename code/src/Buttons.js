import React from "react";
import styled from "styled-components";
import checkmark from './img/checkmark.svg'
import { Link } from "react-router-dom";

const CompleteAllButton = styled.button`
    background: none;
    border: none;
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: #666;
    padding: 40px 0 0 0;

`

const AddTaskBtn = styled(Link)`
    background-color: #707BFB;
    color: white;
    padding: 1.6rem 2.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.4s ease;
    position: fixed;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%,50%);
    

    &:hover {
      background-color: #fff;
      border: solid 1.5px #707BFB;
      color: #707BFB;
      font-size: 2rem;
    }

    &:active {
      background-color: #000;
      color: #fff;    
    }
`



export const CompleteAllBtn = ( {completeAll} ) => {
    return(
        <CompleteAllButton onClick={completeAll}>
            Check all
            <img src={checkmark} alt='checkmark icon'/>
        </CompleteAllButton>
    )
}

export const AddNewTaskBtn = ( t ) => {
   return <AddTaskBtn to='/add-task'>Add a Task</AddTaskBtn>
}

