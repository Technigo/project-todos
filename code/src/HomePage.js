import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import {AddNewTaskBtn} from 'Buttons'

const Logo = styled.h1`
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
    text-align: center;
    color: #707BFB;

`
const CountTask = styled.span`
    font-size: 1.8rem;

`

const NavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    list-style: none;
    font-size: 1.8rem;
    padding: 4.8rem 3.2rem;
    background-color: #fff;
    border: solid 1.5px #000;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.05);   
     width: 37.5rem;
     height: 80vh;
    text-align: center;
 
` 

const NavLinks = styled(NavLink)`
    color: #000;
    text-decoration: none;
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 1.8rem;
    transition: all 0.4s ease;

    &:hover {
        background-color: #000;
        color: #fff;
        padding: 1.6rem 2.2rem;
        border-radius: 10px;
        font-size: 2rem;

    }
`



const HomePage = () => {

    const allTasks = JSON.parse(localStorage.getItem('reduxState'));
    
    const countTasks = () => {

        if (allTasks) {
            const uncompleteTask = allTasks.tasks.list.filter(item => !item.complete)
            return uncompleteTask.length
        }
    
        return 0
    }

    return (
            <NavList>
                <div>
                    <Logo>To-Do List</Logo>
                    <CountTask>To do: {countTasks()} tasks</CountTask>
                </div>
                <NavLinks to='today-task'>
                     <span role='img'aria-hidden="true" >☀️ </span> Today 
                </NavLinks>
                <NavLinks to='complete'>
                    <span role='img'aria-hidden="true" >✅ </span>Complete
                </NavLinks>
                <NavLinks to='uncomplete'>
                    <span role='img'aria-hidden="true" >🚨 </span> Uncomplete
                </NavLinks>
                <NavLinks to='all'>
                    <span role='img'aria-hidden="true" >📝 </span>All tasks
                </NavLinks>
                <AddNewTaskBtn />

            </NavList>
            
    )
}

export default HomePage