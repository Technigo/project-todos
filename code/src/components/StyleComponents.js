import styled from "styled-components"
import { fontStyling, buttonText, glassBottom } from 'components/StyleVariables'

export const ContentWrapper = styled.main`
width: 100%;
position: absolute;
top: 4em;
z-index: 100;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const FormWrapper = styled.div`
${glassBottom}
display: flex;
justify-content: center;
width: 80%;
padding: 2em 0em;
margin-bottom: 2em;

`

export const InputField = styled.form`
display: flex;
flex-direction: column;
width: 80%;
gap: 2em;

`

export const Label = styled.label`
${fontStyling}
font-weight: 700;
font-size: 3.4em;
text-align: center;

`

export const TextInput = styled.input`
/* height: 5em; */
/* box-shadow:0 0 15px 4px rgba(0,0,0,0.03); */
border: 1px gray solid;
border-radius:5px;
padding: 1em 2em;
background-color: lavender;
color: gray;
font-family:inherit;
  font-size: 2em;

`
export const CheckboxStyled = styled.label`

position: relative;
padding-left:2em;

  input {
    opacity: 0;
    width:0; 
    height:0;

    &:checked ~ span {
        background-color: #884eca8a;
        background-blend-mode: multiply;


            &:after {
                display:block;
            }
        } 
    }

  span {
    position: absolute;
    padding: 0.05em;
    top:0.1em;
    left:0;
    width:25px; 
    height:25px;
    background-color: white;

    &:after {   
        content: "";
        position: absolute;
        display: none;
        /* check icon */
        left: 9px;
        top: 2px;
        width: 6px;
        height: 18px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        }
  }
`
export const Cross = styled.button`
position: absolute;
color: white;
width: 50px;
height: 35px;
font-size: 0.7em;
background-color: transparent;
border: none;
right: 1em;
`

export const Submit = styled.button`
height: 2em;
border-radius: 50px;
background-color: #884eca8a;
border: solid white;        
background-blend-mode: multiply;
color: white;
${buttonText}
font-size: 2em;
text-transform: uppercase;
font-weight: 400;

  &:hover {
    border: solid black;        
    color: black;

  }

`

export const ListWrapper = styled.div`
width: 80%;
margin: auto;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
gap: 1em;
`

export const TaskBar = styled.li`
list-style-type: none;

padding: 0.3em 1em;
flex: 1;
cursor: move;

${glassBottom}
${fontStyling}

`
export const ButtonRow = styled.div`
width: 80%;
margin-top: 3em;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
/* gap: 2em; */


    button {
        /* text-decoration: none;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-text-decoration: none;
        padding: 0 1em; */
        /* padding: 2em; */
        /* background: rgba(255, 255, 255, 0.69);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        -moz-backdrop-filter: blur(10px); */

        /* text-align: center; */

        ${buttonText}
        padding: 0.6em;
        flex: 1;
        margin: 0.5em;
        background: rgba(255, 255, 255, 0.40);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        text-transform: uppercase;
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 42px;
        &:active {
        color: rgba(71, 69, 69, 1);
        background: white;
        font-weight: 900;
        }
        &:hover {
        color: rgba(71, 69, 69, 1);
        background: white;
        font-weight: 900;
        }


    }

`