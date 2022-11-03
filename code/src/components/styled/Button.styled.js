import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ all }) => (all ? 'var(--main-color)' : 'gainsboro')};
  margin-top: ${({ all }) => (all && '.5rem')};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: .5rem;
  width: 7rem;
  height: 2.3rem;
    
  &:hover {
//    visibility: ${(props) => (props.hidden && 'hidden')};
//    visibility: ${(props) => (props.hidden && 'visible')}
    }

  `