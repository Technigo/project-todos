import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  &.checkbox {
    grid-column: 1;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: black;
    width: 1.5em;
    height: 1.5em;
    border: 0.15em solid #3f739b;
    border-radius: 1em;
    transform: translateY(-0.05em);
    display: grid;
    place-content: center;
  }
  &.checkbox::before {
    content: '';
    width: 1em;
    height: 1em;
    border-radius: 1em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #3f739b;
  }
  &.checkbox:checked::before {
    transform: scale(1);
  }
`;
