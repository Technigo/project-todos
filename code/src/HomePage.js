import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 3.2rem;

    span {
        color: #707BFB;
    }
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    list-style: none;
    font-size: 1.8rem;
    padding: 4.8rem 3.2rem;
    width: 100%;
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

    return (
            <NavList>
                <Logo><span>Do</span>me</Logo>
                <NavLinks to='today-task'>
                    <li> <span role='img'aria-hidden="true" >☀️ </span> Today </li>
                </NavLinks>
                <NavLinks to='projects'>
                    <li> <span role='img'aria-hidden="true" >🗂 </span> Projects</li>
                </NavLinks>
                <NavLinks to='complete'><li>
                    <span role='img'aria-hidden="true" >✅ </span>Complete</li>
                </NavLinks>
                <NavLinks to='uncomplete'>
                    <li><span role='img'aria-hidden="true" >🚨 </span> Uncomplete</li>
                </NavLinks>
                <NavLinks to='all'>
                    <li><span role='img'aria-hidden="true" >📝 </span>All tasks</li>
                </NavLinks>
            </NavList>
            
    )
}

export default HomePage