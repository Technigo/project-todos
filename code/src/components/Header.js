import React from 'react';
import { useSelector } from 'react-redux';
import img from '../img/shark_fin.png';

import styled from "styled-components";

//styled components
const HeaderContainer = styled.header`
text-align: center;
font-family: 'Gaegu', cursive;
`;

const Heading = styled.h1`
text-align: center;
font-size: 65px;
word-spacing: -8px; 
margin: auto auto;
color: #1CB5E0;
font-weight: 600;
padding: 15px 5px 0 5px;
span {
font-size: 30px;
	}
img {
    height:50px;
} 
@media (max-width: 600px) {
.hiddenMobile{
    display:none;
}
}
`;

const DayHeading = styled.h2`
display: flex;
flex-direction: column;
text-align: center;
font-weight: 400;
font-size: 25px;
margin: 10px auto;
`;

const TaskCount = styled.section`
display: flex;
flex-direction: column;
text-align: center;
font-size: 25px;
font-weight: 400;
margin-bottom: 20px;
`;


//code
const Header = () => {

    const items = useSelector((store) => store.todos.items);

    const activeTodos = items.filter(todo => !todo.isComplete).length;

    const getDay = () => {
        return new Date().toLocaleDateString("en-US", { weekday: "long" });
    }

    const getDate = () => {
        return new Date().toLocaleDateString("en-US", ({ month: 'long', day: 'numeric' }));
    }

    return (

        <HeaderContainer >
            <Heading>
                Todo <span>do do do</span><span className="hiddenMobile"> do do do</span> <img src={img} alt="sharkfin-img" />
            </Heading>
            <DayHeading>{getDay()} • {getDate()}</DayHeading>
            <TaskCount>Active todos: {activeTodos}</TaskCount>
        </HeaderContainer>
    )
}

export default Header;
