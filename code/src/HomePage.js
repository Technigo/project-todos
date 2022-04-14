import React from "react";
import { Link } from "react-router-dom";
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
    width: 40rem;

` 



const HomePage = () => {

    return (
            <NavList>
                <Logo><span>Do</span>me</Logo>
                <Link to='today-task'><li><span role='img'aria-hidden="true" >☀️ </span> Today</li></Link>
                <Link to='projects'><li><span role='img'aria-hidden="true" >🗂 </span> Projects</li></Link>
                <Link to='complete'><li><span role='img'aria-hidden="true" >✅ </span>Complete</li></Link>
                <Link to='uncomplete'><li><span role='img'aria-hidden="true" >🚨 </span> Uncomplete</li></Link>
                <Link to='all'><li><span role='img'aria-hidden="true" >📝 </span>All tasks</li></Link>
            </NavList>
            
    )
}

export default HomePage