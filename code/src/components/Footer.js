import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    text-align: center;
    padding-top: 10px;
    margin-top: 40px;
`

const Freepik = styled.p`
    font-size: 12px;
    margin-bottom: 0;
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