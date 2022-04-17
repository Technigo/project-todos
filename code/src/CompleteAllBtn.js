import React from "react";
import styled from "styled-components";
import checkmark from './img/checkmark.svg'

const CompleteAllButton = styled.button`
    background: none;
    border: none;
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: #666;

`



const CompleteAllBtn = ( {completeAll} ) => {
    return(
        <CompleteAllButton onClick={completeAll}>
            Check all
            <img src={checkmark} alt='checkmark icon'/>
        </CompleteAllButton>
    )
}

export default CompleteAllBtn