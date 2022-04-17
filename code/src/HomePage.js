import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
    text-align: center;

    span {
        color: #707BFB;
    }
`
const CountTask = styled.span`
    font-size: 1.6rem;

`

const NavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    list-style: none;
    font-size: 1.8rem;
    padding: 4.8rem 3.2rem;
    width: 100%;
    background-color: #fff;
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
                    <Logo><span>Do</span>me</Logo>
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
            </NavList>
            
    )
}

export default HomePage