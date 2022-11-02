import styled from 'styled-components'

export const Section = styled.section`
    border: 2px solid yellow;
    width: 70%;
    margin-left: 15%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export const Wrapper = styled.div`
    border: 2px solid lime;
    background-color: pink;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const InputWrapper = styled(Wrapper)`
    background-color: white;
`

// export const InputWrapper = styled.div`
//     border: 2px solid lime;
//     width: 300px;
//     height: 100px;
//     border-radius: 20px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
// `

export const Date = styled.h2`
text-align: center;
width: 100px;
color: white;
font-size: 12px;
`

export const InputForm = styled.input`
  border: none;
  background-color: transparent;
  font-size: 18px;
  width: 70%;
  height: 50px;
  color: #8fc9a3;
  ::placeholder {
       color: black;
   }
  &:focus {
  background-color: pink;
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
`