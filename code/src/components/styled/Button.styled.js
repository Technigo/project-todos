import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => (props.all ? 'var(--main-color)' : 'gray')};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  margin-top: .5rem;
  padding: .5rem;
  width: 7rem;

  visibility: ${(props) => (props.hidden && 'hidden')};
`