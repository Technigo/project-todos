import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;

  & button {
    font-size: 1.5rem;
    background-color: white;
    border: none;
    color: gray;
    cursor: pointer;
    padding: .5rem 1rem;
  }

  & input {
    border: none;
    font-size: 1rem;
    padding: .5rem 0;
    width: fit-content;
}

  & input::placeholder {
    color: darkblue;
  }

`