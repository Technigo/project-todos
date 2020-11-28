import styled from 'styled-components/';

export const Button = styled.button`
  padding: 6px 12px;
  justify-self: end;
  width: fit-content;
  background: ${(props) => props.background || '#6979f8'};
  border-radius: 6px;
  border: none;

  &: hover {
  background: black;
  color: white;
}

// @media (min-width: 600px) {
//   font-size: inherit;
// }
`;