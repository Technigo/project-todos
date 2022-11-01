/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }

`

export const DeleteBtn = styled.button`
    height: 20px;
    width: 20px;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 50%;
    background-color: #bbbbbb;
    color: white;
    text-align: center;
    cursor: pointer;
    border: none;


`