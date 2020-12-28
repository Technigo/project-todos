import React, { useState } from 'react';

import { CheckBoxContainer, HiddenCheckBox, StyledCheckbox, Icon} from 'styling/CheckBoxStyling';

const CustomCheckBox = ({ isChecked, onChangeHandler }) => {
    const [checked, setChecked] = useState(isChecked);

    const OnChangeChecked = e => {  
        onChangeHandler();
        setChecked(e.target.checked);
    };

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
                    <Checkbox 
                        checked={checked} 
                        onChange={OnChangeChecked}>
                    </Checkbox>
                </label>
            </div>    
        );
    };

export default CustomCheckBox;