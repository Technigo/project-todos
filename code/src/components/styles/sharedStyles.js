import styled from "styled-components/macro"


export const Section = styled.section`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
/* border: 2px solid red; */
border-radius: 5px;
background-color: #F3F7F7;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  text-align: center;
  color: #000;

  &:disabled {
  cursor: not-allowed;
}
`