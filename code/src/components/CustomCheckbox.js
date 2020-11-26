import React, { useState } from 'react';
import styled from 'styled-components';

import todos from 'reducers/todos';

const CustomCheckBox = ({isChecked, onChangeHandler}) => {
    const [checked, setChecked] = useState(isChecked);

    const handleOnChange = e => {  //onChangeChecked
        onChangeHandler();
        setChecked(e.target.checked);
    }

    //This gives a hidden checkbox that is still accessible for screenreaders
    const HiddenCheckBox = styled.input.attrs({ type: 'checkbox'})`
        border: 0,
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
        stroke-width: 2px;
    `;

    const StyledCheckbox = styled.div`
        display: inline-block;
        width: 20px;
        height: 20px;
        background: ${props => props.checked ? 'blue': 'gray'};
        border-radius: 3px;
        transition: all 150ms;
        ${Icon} {
            visibility: ${(props) => (props.checked ? 'visible': 'hidden')};
        }
    `;

    const CheckBoxContainer = styled.div`
        display: inline-block;
        vertical-align: middle;
    `;

    

    const Checkbox = ({ className, checked, ...props }) => (
        <CheckBoxContainer>
            <HiddenCheckBox checked={checked} {...props}></HiddenCheckBox>
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                </Icon>
            </StyledCheckbox>
        </CheckBoxContainer>
    );
        


    return (
        <div>
            <label>
                <Checkbox checked={checked} onChange={handleOnChange}>

                </Checkbox>
            </label>
        </div>
    );
};

export default CustomCheckBox;