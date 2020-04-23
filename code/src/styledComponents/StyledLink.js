import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 20px;
    font-weight: bold;
    background-color: white;
    border-radius: 8px;
    transition: 0.3s;
    padding: 8px;

    &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
   } 
`