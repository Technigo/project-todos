import styled from 'styled-components'

export const Form = styled.form`
margin: 0 auto;

/* --hides and shows input-- */
&.input-hidden {
  display: none;
}
&.input-active {
  display: initial;
}
`

export const Calendar = styled.input`
color: red;
border: 2px solid blue;
&.calendar-hidden {
  display: none;
}
&.calendar-active {
  display: initial;
  display: flex;
}
`

export const TagWrap = styled.div`
display: flex;
`
export const PrioTag = styled.div`
font-size: 1rem;
border: 2px solid black;
`

