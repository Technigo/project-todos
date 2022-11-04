import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: var(--light-color);

  & button {
    font-size: 2rem;
    border: none;
    background-color: var(--button-color);
    color: white;
    cursor: pointer;
    height: 100%;
    padding: .8rem 1.4rem;
  }

  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1.5rem;
    width: 100%;
   }

  & p /* error message */ {
    display: inline;
    color: tomato;
    font-weight: 900;
  }

  & input {
    background-color: var(--light-color);
    border: none;
    color: var(--main-color);
    font-size: 1.1rem;
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