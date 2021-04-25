import React from 'react';
import styled from 'styled-components';

const Headers = styled.section `
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 30px;
`;
const Header = () => {
    return(
        <Headers>
            <h1>
                Todo List{" "}😄      
            </h1>
        </Headers>
    )
}
export default Header;