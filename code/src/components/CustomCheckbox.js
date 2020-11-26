import React, { useState } from 'react';
import styled from 'styled-components';

 // Overwriting the default checkbox style so it's not visible but still accessible
 const HiddenCheckbox = styled.input.attrs({type:"checkbox"})`
 border: 0;
 clip: rect(0 0 0 0):
 clippath: inset(50%);
 height: 1px;
 margin: -1px;
 overflow: hidden;
 padding: 0;
 position: absolute;
 white-space: nowrap;
 width: 1px;
`;

// Styling for the tick in the checkbox
const Icon = styled.svg`
 fill: none;
 stroke: rgb(36, 90, 92);
 stroke-width: 3px;
`;

// Overwriting the default checkbox styling with this new styling. Also implementing the tick svg by saying that when the checkbox is checked then show the tick, otherwise don't. This is done by passing props from the checkbox function below (but not 100% about this)
const StyledCheckbox = styled.div`
 display: inline-block;
 width: 18px;
 height: 18px;
 background: ${(props) => (props.checked ? "pink" : "white")};
 border-radius: 50%;
 border: 2px solid rgb(36, 90, 92);
 transition: all 150ms;
 padding: 5px;
 cursor: pointer;
 ${Icon} {
     visibility: ${(props) => (props.checked ? "visible" : "hidden")}
 };
 ${HiddenCheckbox}: focus + & {
     box-shadow: 0 0 0 3px pink;
 };
`;

//Creating a div around the checkbox
const CheckboxContainer = styled.div`
 display: inline-block;
 vertical-align: middle;
`;

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
    ) ;

    return(
        <div>
            <label>
                <Checkbox checked={change} onChange={handleOnChange}></Checkbox>
            </label>
        </div>
    );
};
