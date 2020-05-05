import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ToDo }from "reducers/toDo"
import styled, { css } from 'styled-components'
import Emoji from 'a11y-react-emoji'


export const CustomCheckbox =({isChecked, onChangeHandler}) => {
    const dispatch = useDispatch()
    const [checked, setChecked]= useState(isChecked)

    const handleOnChange = (event)=> {
        onChangeHandler()
        setChecked(event.target.checked)
    }
    const HiddenCheckbox = styled.input.attrs ({type:"checkbox"})`
        border: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    `;

    const StyledEmoji = styled(({ isSpinning, ...props }) => <Emoji {...props} />)`
    font-size: 32px;
    ${props => props.isSpinning && css`
    animation: spinning 1s linear infinite;
    `}
    `;

    const Icon = styled.svg`
        fill: none;
        stroke: white;
        stroke-width: 2px;
    `;

    const StyledCheckbox = styled.div`
        display: inline-block;
        width: 32px;
        height: 32px;
        background: ${(props) => (props.checked ? " " : "lightgrey")};
        border-radius: ${(props) => (props.checked ? "2px" : "30px")};
        transition: all 150ms;
        cursor: pointer;
            ${StyledEmoji} {
            visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
    `;
    const CheckboxContainer = styled.div`
        display: inline-block;
        vertical-align: middle;
    `;

    const Checkbox = ({ className, checked, ...props}) => (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
            <StyledCheckbox checked ={checked}>
                <StyledEmoji symbol="⭐️" />
               
            </StyledCheckbox>
        </CheckboxContainer>
    )

    return (

        <div>
            <label>
                <Checkbox checked = {checked} onChange= {handleOnChange}/>
            </label>
        
        </div>
    )
}