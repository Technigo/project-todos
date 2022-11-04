/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const TodoListContainer = styled.section`
    align-self: center;
    margin: 10px;
    
    h2 {
        font-size: 1.1rem;
        padding-bottom: 20px;
    }

    > .finished {
        background: #C8DBBE;
    }
`

export const ClearCompleteBtn = styled.button`
    align-items: center;
    float: right;
    background-color: #5DA7DB;
    border: 1px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
    display: flex;
    font-size: 0.8rem;
    height: 35px;
    justify-content: center;
    padding: 0 25px;
    position: relative;
    text-align: center;
    touch-action: manipulation;

    &:after {
        background-color: #11111187;
        border-radius: 8px;
        content: "";
        display: block;
        height: 32px;
        left: 0;
        width: 100%;
        position: absolute;
        top: -1px;
        -webkit-transform: translate(8px,8px);
        -ms-transform: translate(8px,8px);
        transform: translate(3px,5px);
        -webkit-transition: -webkit-transform .2s ease-out;
        -webkit-transition: transform .2s ease-out;
        transition: transform .2s ease-out;
        z-index: -1;
    }
    

    &:hover:after {
        transform: translate(0, 0);
    }

    &:active {
        background-color: #ffdeda;
        outline: 0;
    }

    &:hover {
        outline: 0;
    }

`

