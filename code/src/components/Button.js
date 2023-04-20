import styled from 'styled-components';

export const Button = styled.button`
    height: 3rem;
    width:10em;
    padding:5px;
    line-height: 20px;
    font-size: 1.1em;
    border-radius: 10px;
    background-color: var(--dark-blue);
    color: var(--white);
    text-align: center;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1)
    }
`