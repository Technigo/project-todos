import styled from 'styled-components'

/* Inputfield */
export const Form = styled.form`
  background: #293a80;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding-top: 10px;
  margin-bottom: 0px;
`
export const InputField = styled.input`
  height: 40px;
  width: 80%;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: lighter;
  padding-left: 10px;
  color: white;
  background: #537ec5;
  border: none;
  outline: none;
  box-shadow: 0 3px 3px 0px #010038;
  :focus {
    outline: 2px solid #f39422;
  }
`
