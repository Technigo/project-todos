import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  padding: 1.5rem;
  margin: 0.4rem;
  //border: 2px solid orange;
`

export const Actionbtn = styled.button`
  align-self: ${(props) => props.align};
  padding: 0.4rem;
  margin: 0.4rem;
  background: ${(props) => props.color}; //#1F9D6E;
  color: white;
  border-radius: 4px;
  border: none;
  width: 5.5rem;
`