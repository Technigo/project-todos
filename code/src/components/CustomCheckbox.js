import React, { useState } from "react"
import {useDispatch} from "react-redux"
import {ToDo} from "reducers/ToDo"
import styled from "styled-components"



export const CustomCheckbox = () => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)
    
    const handleOnChange = (event) => {
        setChecked(event.target.checked)
    }
    
    const HiddenCheckbox = styled.input.attrs({type:"checkbox"})`
        border: 0;
        clip:rect(0000);
        clip-path: inset(50%);
        height:1px;
        margin:-1;
        overflow: hidden;
        padding:0;
        position:absolute;
        white-space: nowrap;
        width: 1px;
    `;
     const Icon = styled.svg`
     fill: none;
     stroke:lemonchiffon;
     stroke-width:2px;
     `;
     
    const StyledCheckbox = styled.div`
        display: inline-block;
        width:26px;
        height:26px;
        background-color: ${props => props.checked ? "green" : "yellow"};
        border-radius: ${(props) => (props.checked ? '12px' : '3px')};
        
        transition: all 150ms;
        ${Icon} {
            visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
        };
    `;

    const CheckboxContainer = styled.div `
        display: inline-block; 
        vertical-align: middle;
    `;

 const Checkbox = ({ className, checked, ...props}) => (
     <CheckboxContainer>
         <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
         <StyledCheckbox checked = {checked}>
         <Icon viewBox="00 24 24">
            <polyline points =" 20 3 9 17 4 12"/>
         </Icon>
         </StyledCheckbox>
     </CheckboxContainer>
 );

return(
        <div>
          <label>
              <Checkbox checked={checked} onChange= {handleOnChange}></Checkbox>
          </label>
          This state is now {checked.toString()}
        </div>
        )
}