import styled from 'styled-components'

export const Button = styled.button`
  background: ${(props) => props.background || '#ED839D'};
  color: ${(props) => props.color || '#F5F0D7'};
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 16px;
  transition: all 150ms;

  &:hover {
    background: #F5F0D7;
  }
`