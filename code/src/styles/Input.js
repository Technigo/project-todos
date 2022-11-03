import styled from 'styled-components'

export const Form = styled.form`
margin: 0 auto;
padding: 20px;
/* --hides and shows input-- */
&.input-hidden {
  display: none;
}
&.input-active {
  display: initial;
}
`

export const Input = styled.input`
color: #FFB800;
width: 268px;
height: 30px;
margin: 2px;
border: none;
font-size: 1rem;
border-bottom: 2px solid #FFB800;
::placeholder{
  color: #FFB800;
}
&:focus {
    background-color: white;
    outline: none;
    color: black;
}

`

export const Calendar = styled.input`
color: #FFB800;
width: 270px;
height: 30px;
margin: 2px;
border: none;
font-size: 1rem;
border-bottom: 2px solid #FFB800;
&.calendar-hidden {
  display: none;
}
&.calendar-active {
  display: initial;
  display: flex;
}
&:focus {
    background-color: white;
    outline: none;
}
`

export const TagWrap = styled.div`
display: flex;
padding: 10px;
`
export const PrioTag = styled.label` 
margin: 0 auto;
width: 30px;
padding: 10px;
`

export const Low = styled.input`  //checkbox 
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 2em;
  height: 2em;
  border: 0.15em solid grey;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #4398bf;
  }
  &:checked::before {
    transform: scale(1);
  }
`

export const Medium = styled.input`  //checkbox 
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 2em;
  height: 2em;
  border: 0.15em solid #4398bf;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #4398bf;
  }
  &:checked::before {
    transform: scale(1);
  }
`

export const High = styled.input`  //checkbox 
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 2em;
  height: 2em;
  border: 0.15em solid #4398bf;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #4398bf;
  }
  &:checked::before {
    transform: scale(1);
  }
`

export const TrashBtn = styled.button`
position: relative;
left: 85%;
width: 30px;
height: 30px;
border-radius: 50%;
border: none;
background:none;
`
export const Trash = styled.span`
font-size: 1rem;
font-weight: 600;
color: #FFB800;
margin: 0 auto;
`