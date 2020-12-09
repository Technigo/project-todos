import React, { useState } from 'react';
import styled from 'styled-components';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
    const [checked, setChecked] = useState(isChecked);

    //  Handles the value change. Set the state whenever the value of the checked changes. Whatever the value of the checkbox is from the checkbox we're updating the state 
    const handleOnChange = (event) => {
        onChangeHandler();
        setChecked(event.target.checked);
    };

    // Hidden checkbox but still accesible (attrs=attributes)
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
    stroke: #fceef5;
    stroke-width: 4px; 
    `;

    const StyledCheckbox = styled.div`
    display: inline-block;
    margin-right: 10px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: ${(props) => (props.checked ? '#e05297' : '#fceef5')};
    transition: all 150ms;
    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
    }

    &:hover {
        background: #ea86b6;
    }
    `;

    const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    `;

    // This is a component in another component. We are defining a variable that will be rendered. Anything we send in as an attribute, like checked=true. 
    // The values we pass into this function, will pass the value to the hidden checkbox so that the functionality works 
    // 3, We also pass the value into the styled checkbox so that it could use the conditional styling 
    const Checkbox = ({ className, checked, ...props }) => (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="22 3 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );

    return (
        <div>
            <label>
                {/* {When we check the checkbox the function on row 10 is running } */}
                <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
            </label>
        </div>
    );
};