import styled from 'styled-components'

export const Header = styled.header`
    color: grey;
`

export const Section = styled.section`
    width: 100%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const Wrapper = styled.div`
    background-color: pink;
    width: 300px; 
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const InputWrapper = styled.div`
    background-color: pink;
    width: 300px; 
    height: 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const Date = styled.h2`
border: 2px solid lime;
color: white;
font-size: 16px;
`

export const InputForm = styled.input`
  border: none;
  background-color: transparent;
  font-size: 18px;
  width: 200px; 
  height: 80px;
  color: #8fc9a3;
  ::placeholder {
       color: white;
   }
  &:focus {
  background-color: hotpink;
  border-radius: 20px;
  outline: none;
  ::placeholder {
       font-style: bold;
   }
}
`
export const CheckBoxWrapper = styled.label`
margin-left: 5px;
border: 2px solid blue;
display: block;
position: relative;
height: 30px;
width: 100px;

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
border: 2px solid lime;
color: white;
font-size: 16px;
`