import styled from 'styled-components';

export const Button = styled.button`
background-color: #E6DBBC;
font-family: 'League Spartan', sans-serif;
font-size: 1rem;
border-radius: 20px;
border: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.8rem 1rem;
color: black;


:hover {
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

@media (min-width: 668px) {
    font-size: 1.3rem;
  }

`
