import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const HeaderWrapper = styled.h1`
text-align: center;
`

const Title = styled.h1`
font-size: 3rem;
font-family: 'Pacifico', cursive;
color: #F3F4ED;
`;

const Time = styled.h3`
color:  #C06014;
font-size: 1.2rem;
font-family: 'Pacifico', cursive;
text-align: center;
`;

const Header = () => {
    const dateTime = moment().format('dddd D MMM YYYY');

    return (
        <>
            <HeaderWrapper>
                <Title>Todo</Title>
                <Time>{dateTime}</Time>
            </HeaderWrapper>
        </>
    )
};

export default Header;