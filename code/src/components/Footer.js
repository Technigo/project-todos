import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: #723c70;
    text-align: center;

`

const Freepik = styled.p`
    font-size: 12px;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`


const Footer = () => {
    return(
        <FooterWrapper>
            <span>Made by Ida Näslund</span>
            <Freepik><Link href='https://www.freepik.com/vectors/task-management'>
                Task management vector created by vectorjuice - www.freepik.com</Link></Freepik>
        </FooterWrapper>
        
    )
}

export default Footer