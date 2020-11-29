import styled from 'styled-components';

export const Button = styled.button`
border: none;
border-radius: 50%;
height: 30px;
width: 30px; 
margin: 10px;
justify-self: flex-end;
font-weight: bold;
font-size: 16px;
transition: all 150ms;
cursor: pointer;
background: #fceef5;

&:hover {
    background: #ea86b6;
}
`;