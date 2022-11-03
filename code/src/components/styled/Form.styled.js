import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  height: 4rem;

  & button {
    font-size: 2rem;
    border: none;
    background-color: var(--third-color);
    color: white;
    cursor: pointer;
    padding: .8rem 1.4rem;
  }

  & input {
    border: none;
    font-size: 1.1rem;
    padding: .5rem 0;
    margin-left: .5rem;
}

  & input::placeholder {
    color: var(--main-color);
    padding-left: .5rem;
  }
`