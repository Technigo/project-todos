import styled from 'styled-components'

export const Section = styled.section`
    width: 90%;
    margin-left: 5%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 750px) {
        width: 50%;
        margin-left: 25%;
        padding-left: 15px;
        padding-right: 15px;
        background: white;
        }
`

export const Wrapper = styled.div`
    background-color: rgb(192, 222, 195);
    width: 100%;
    height: 50px;
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 10px;
    box-shadow: 2px 5px #888888;
`
export const InputWrapper = styled(Wrapper)`
    background-color: white;
    margin-bottom: -17px;
    box-shadow: none;
`

export const InputForm = styled.input`
  border: none;
  border-bottom: 2px solid lightgrey;
  background-color: transparent;
  width: 100%;
  height: 50px;
  color: black;
  font-size: 16px;
  }
  ::placeholder {
       color: black;
       font-family: 'Nunito Sans', sans-serif;
   }
  &:focus {
    background-color: rgb(192, 222, 195);
    border-bottom: transparent;
    outline: none;
    color: black;
    font-size: 18px;
    padding-left: 42px;
    font-weight: 400;
    box-shadow: 2px 5px #888888;
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
position: absolute;
left: 40px;
color: black;
font-size: 18px;
font-family: 'Nunito Sans', sans-serif;
font-weight: 600;
`

export const Date = styled.h2`
position: absolute;
right: 27px;
width: 48px;
color: rgb(52, 52, 52);
font-size: 14px;
font-family: 'Nunito Sans', sans-serif;
@media (min-width: 750px) {
  width: 100px;
  right 20px;
}
`