import styled from 'styled-components';

export const SingleTaskWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
gap:1rem;
border-radius: 10px;

`;

export const SingleTaskChild = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 0;
`;

export const TaskName = styled.h3`
`

export const CheckboxInput = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid var(--dark-blue);
  border-radius: 50%;

  /* Change color of the checkbox when checked */
  &:checked {
    background: var(--dark-blue);
  }
`;
