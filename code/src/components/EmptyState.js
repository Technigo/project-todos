import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EmptyStateText = styled.p`
font-size: 13px;
font-weight: bold;
color: #fceef5;
margin-top: -15px;

@media (min-width: 667px){
    font-size: 16px;
  }
`;


export const EmptyState = () => {
    const list = useSelector((store) => store.todos.list);
    const todosCompleted = list.items.filter((item) => item.id !==true)

        if (todosCompleted.length === 0){

         return (
               <EmptyStateText>
                    What are you going to accomplish today?  
               </EmptyStateText>
            );
        };

        return (
                <EmptyStateText>
                    What are you waiting for? Let's go!
                </EmptyStateText>
            );
};
