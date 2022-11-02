import styled from 'styled-components'

export const Form = styled.form`
width: 400px;

/* --hides and shows input-- */
&.input-hidden {
  display: none;
}
&.input-active {
  display: initial;
}
`