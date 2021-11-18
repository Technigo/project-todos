import React from 'react';
import { useSelector } from 'react-redux';

import styled from "styled-components/macro";

//styled components
const HeaderContainer = styled.header`
text-align: center;
`;

const Heading = styled.span`
text-align: center;
font-size:55px;
`;


const TaskCount = styled.section`
text-align: center;
    font-size: 52px;
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
    <Heading>Todos</Heading>
    <TaskCount>{ activeTodos }</TaskCount>
    <div>{ getDay() }</div>
    <div>{ getDate() }</div>
    </HeaderContainer>
)
}

export default Header;
