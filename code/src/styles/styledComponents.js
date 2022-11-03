import styled from 'styled-components'

export const Section = styled.section`
    width: 90%;
    margin-left: 15%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    @media (min-width: 800px) {
        width: 70%;
        }
`

export const Wrapper = styled.div`
    background-color: pink;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`
export const InputWrapper = styled(Wrapper)`
    background-color: white;
    margin-bottom: -15px;
`

export const InputForm = styled.input`
  border: none;
  border-bottom: 2px solid lightgrey;
  background-color: transparent;
  width: 100%;
  height: 50px;
  color: black;
  font-size: 16px;
  ::placeholder {
       color: black;
       font-family: 'Nunito Sans', sans-serif;
   }
  &:focus {
    background-color: pink;
    border-bottom: transparent;
    outline: none;
    color: black;
    padding-left: 45px;
    font-weight: 600;
}
`
export const CheckBoxWrapper = styled.label`
margin-left: 5px;
border: 2px solid blue;
display: block;
position: relative;
height: 30px;

.checkbox {
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 35px;
  width: 35px;
  cursor: pointer;
  &:checked {
    width: 55px;;
  }

  .checkMark {
  border: 2px solid black;
  position: absolute;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  }
}
`

export const TaskText = styled.h2`
color: black;
font-size: 16px;
font-family: 'Nunito Sans', sans-serif;
padding-left: 20px;
font-weight: 600;
`

export const Date = styled.h2`
border: 2px solid green;
position: relative;
margin-left: 68%;
width: 48px;
color: black;
font-size: 14px;
font-family: 'Nunito Sans', sans-serif;
&:hover {
  color: black;
}
@media (min-width: 600px) {
  margin-left: 75%;
}
@media (min-width: 800px) {
  margin-left: 55%;
  width: 100px;
}
`