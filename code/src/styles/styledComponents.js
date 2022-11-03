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
.container {
  display: block;
  position: relative;
  left: 4px;
  bottom: 11px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  left: 4px;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: " ";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
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