import styled from 'styled-components/macro'

export const FilteringSection = styled.section`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
border: 2px solid red;
border-radius: 5px;
background: #fff;
`

export const FilteringButtonsBox = styled.div`
display: flex;
justify-content: space-evenly;
`

export const FilteringInput = styled.label`
align-self: center;
margin-top: 10px;

& input {
  width: 242px;
  text-align: center;
}
`

export const Count = styled.div`
margin-top: 10px;
text-align: center;
font-size: 10px;
`