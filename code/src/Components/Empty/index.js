import React from "react";
import styled from 'styled-components';

const EmptyContainer = styled.img`
    border-radius: 10px;
    margin: 3rem auto;
    width: 90%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

     @media (min-width: 768px){
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
`

export const Empty = () => {

    return (
        <EmptyContainer src="https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        </EmptyContainer >
    )
}