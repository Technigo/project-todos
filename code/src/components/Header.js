import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
background-color: #90e0ef;
`



const Header = () => {
    return(
        <HeaderWrapper>
            <h1>THIS IS MY HEADER</h1>
        </HeaderWrapper>
    )
}

export default Header