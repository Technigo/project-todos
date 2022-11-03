import styled from 'styled-components'

export const GlobalWrap = styled.div`
border: 2px blue solid;
max-width: 400px;
margin: 0 auto;
`

export const Section = styled.section`
display: flex;
width: 100%;
margin-bottom: 5%;
`

export const ListWrap = styled.div`
border-radius: 10px;
max-width: 340px;
padding: 10px;
background: #ffff;
margin: 20px auto;
box-shadow: 4px 3px 5px -2px rgba(0,0,0,0.41);
-webkit-box-shadow: 4px 3px 5px -2px rgba(0,0,0,0.41);
-moz-box-shadow: 4px 3px 5px -2px rgba(0,0,0,0.41);
`
export const InformationWrap = styled.div`
padding-left: 10px;
margin-top: -5px;
`
export const CheckWrap = styled.label`
`

export const StyledCheckbox = styled.input`
cursor: pointer;
  appearance: none;
  margin: 5px;
  margin-left: -20px;
  font: inherit;
  color: black;
  width: 1em;
  height: 1em;
  border-radius: 5px;
  border: 0.10em solid #FFB800;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1em;
    height: 1em;
    transform: scale(0);
    border-radius: 5px;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #FFB800;
  }
  &:checked::before {
    transform: scale(1);
  }
`