import React, { useState } from "react";
import styled from 'styled-components'



export const CustomCheckbox = ({isChecked, onChangeHandler}) => {
    const [checked, setChecked] = useState(isChecked);

    const HandleOnChange = e => {
        onChangeHandler();
        setChecked(e.target.checked)
    }


    const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
       border: 0;
       clip: rect(0 0 0 0);
       clippath: inset(50%);
       height: 1px;
       margin: -1px;
       overflow: hidden;
       padding: 0;
       position: absolute;
       white-space: nowrap;
       width: 1px;
    `;

    const Icon = styled.svg`
       fill: none;
       stroke: white;
       stroke-width: 1px;
    `;

    const StyledCheckbox = styled.div`
       width: 20px;
       height: 20px;
       background: ${(props) => (props.checked ? '#7487AD' : '#E6F5FF')};
       border-radius: 50%;
       transition: all 150ms;

       ${Icon} {
            visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
       }

     `;

    const CheckboxContainer = styled.div`
       display: inline.block;
       vertical-align: middle;
    
    `;

    const Checkbox = ({className, checked, ...props}) => (
        <CheckboxContainer>

            <HiddenCheckbox checked={checked} {...props} ></HiddenCheckbox>
            <StyledCheckbox  checked={checked}>
                <Icon viewbox="0 0 20 20">
                <polyline points="15 3 8 14 4 10" />
                </Icon>
            </StyledCheckbox>

        </CheckboxContainer>

    )

    return (
        <div>
            <label>
                <Checkbox checked={checked} onChange={HandleOnChange}></Checkbox>
            </label>
            
        </div>
    
    );

};