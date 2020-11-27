import React, { useState } from 'react';

import { 
    HiddenCheckbox,
    Icon,
    StyledCheckbox,
    CheckboxContainer
 } from '../styled-components/Checkbox';


export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {

    // Setting the state of the custom checkbox to the isChecked value via props from TasItem.js. If else statement which will show the checkbox as checked or not checked depending on if the done property for that task is set to true or false as it's value is a boolean
    const [ change , setChange ] = useState(isChecked);    

    // Function for handling what happens when the user checks the checkbox. Calling the onChangeHandler function that is passed as props from ListItem.js. When the checkbox is clicked (changed) the reducer for that function will be called and the global state will be updated 
    const handleOnChange = event => {
        onChangeHandler();
        setChange(event.target.checked);
    };

    // Checkbox jsx structure for the checkbox container, the hidden checkbox, the custom checkbox and the tick inside the checkbox
    const Checkbox = ({ checked, ...props}) => (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );

    return(
        <div>
            <label>
                <Checkbox checked={change} onChange={handleOnChange}></Checkbox>
            </label>
        </div>
    );
};
