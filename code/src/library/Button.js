 import styled from 'styled-components'

//From Jennies code below. Not sure what it does with the background, so removed it.
//props: if you send props on button in component regarding background 
//it will take that color, otherwise have default color.
// background: ${(props) => props.background || 'yellow'};
//background-color: #f9adae;
export const Button = styled.button`
 padding: 12px;
 margin: 6px;
 background: ${(props) => props.background || '#f5b851'};
 font-size: 20px;
 border: none;
 border-radius: 6px;
 color: #fff;
 font-weight: 600;

 &:hover {
   background: grey;
   color: white;
 }
 `;