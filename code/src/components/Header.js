import React from 'react';
import styled from 'styled-components';
import Moment from 'moment';

const Title = styled.h1 `
    font-size: 50px;
    color: white;
    border: 1px solid black;
    padding: 5px;
    background-color: #ff4a6a;
`;

const Header = () => {

    return <Title>{Moment().format("MMM Do YY")}</Title>   
}

export default Header;