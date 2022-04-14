import styled from "styled-components/macro"


export const Section = styled.section`
display: flex;
flex-direction: column;
max-width: 800px;
margin: 10px 20px;
padding: 10px;
border-radius: 5px;
background-color: #E8EBED;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  text-align: center;
  color: #3B7C7D;

  &:disabled {
  cursor: not-allowed;
}
`