import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;
`

export const Button = styled.button`
  background-color:#000066;
  border: none;
  height: 30px;
  width: 30px;
  margin-left:5px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 16px;
  transition: all 150ms;
  color:white;

  &:hover {
    background: black;
  }
`

export const TextInput = styled.textarea`
  width: 230px;
  height: 30px;
  margin: 20px 0;
  padding: 5px;
  border: none;
  border-radius: 7px;
  background: #F4F4F4;
  font-size: 16px;
  overflow-wrap: break-word;
  
  @media (min-width: 667px){
    width: 320px;
  }
`
 