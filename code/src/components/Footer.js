import React from 'react';

import styled from 'styled-components';


export const Footer =() => {

    return (
        <Article>
            <p>Made by Ylva Landoff Lindberg</p>
        </Article>
    )
};

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 90px;
`; 
