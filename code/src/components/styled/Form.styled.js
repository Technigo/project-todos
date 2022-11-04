import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;

  background-color: gainsboro;

  & button {
    font-size: 2rem;
    border: none;
    background-color: var(--third-color);
    color: white;
    cursor: pointer;
    height: 100%;
    padding: .8rem 1.4rem;
  }

  & input {
    background-color: gainsboro;
    border: none;
    color: var(--main-color);
    font-size: 1rem;
    padding: .5rem 0 .5rem .5rem;
    margin-left: .5rem;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    color: var(--main-color);
  }
`