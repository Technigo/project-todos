import styled from 'styled-components'

export const Button = styled.button`
  width: ${(props) => props.width || '40px'};
  height: ${(props) => props.height || '40px'};
  margin: 5px auto;
  padding: 0 8px;
  border: none;
  border-radius: 10px; 
  background: #888d64;
  color: #fff;
  font-family: 'Playfair Display';
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`