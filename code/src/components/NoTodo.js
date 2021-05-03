import React from 'react';

import styled from 'styled-components';


export const NoTodo = () => {
    
    return (
        <Article>
            <Text>There are allways stuff to be done! Start your Todo-List!</Text>
        </Article>
    )
};

const Text = styled.p`
    font-size: 30px;
    color: #D8D8D8;
    text-align: center;
    padding-top: 20px;
        @media (min-width: 768px) {
            padding-top: 50px;
        }
`;

const Article = styled.article`
    width: 90%
    padding-top: 100px;
`;

