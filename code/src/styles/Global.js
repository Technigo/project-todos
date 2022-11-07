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
    &.complete-todo{
    background-color: rgb(108, 133, 110);
}
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
export const CheckBoxWrapper = styled.div`
background-color: none;

.checkBox {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: grey;
  width: 18px;
  height: 18px;;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
@media screen and (min-width: 1024px) {
  &:hover {
  cursor: pointer;
}}
::before {
  content: "";
  width: 0.9em;
  height: 0.9em;
  border-radius: 20px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em black;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
:checked::before {
  transform: scale(1);
}
}
`

export const TaskText = styled.h2`
position: absolute;
top: 0px;
left: 40px;
color: black;
font-size: 18px;
font-family: 'Nunito Sans', sans-serif;
font-weight: 600;
&.complete-todo{
    color: rgb(46, 46, 46);
    text-decoration: line-through;
}
`

export const Date = styled.h2`
position: absolute;
align-item: center;
right: 30px;
width: 100px;
color: rgb(52, 52, 52);
font-size: 14px;
font-family: 'Nunito Sans', sans-serif;
&.complete-todo{
    color: rgb(46, 46, 46);
}
`