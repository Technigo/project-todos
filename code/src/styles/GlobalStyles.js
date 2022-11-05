import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Actionbtn = styled.button`
  align-self: ${(props) => props.align};
  padding: 0.6rem 0.4rem;
  margin: 0.4rem;
  background: ${(props) => props.color};
  color: white;
  border-radius: 4px;
  border: none;
  width: 5.9rem;
  cursor: pointer;
  font-weight: bold;
`