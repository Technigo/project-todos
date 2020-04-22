import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos"
import styled from 'styled-components'
import { ReactComponent } from "*.svg";

export const CustomCheckbox = () => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const HandleOnChange = e => {
        setChecked(e.target.checked)
    }


    const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
       border: 0;
       clip:ReactComponent(0 0 0 0);
       clippath: inset(50%)
       height: 1px;
       margin: -1px;
       overflow: hidden;
       padding: 0;
       position: absolute;
       white-space: nowrap;
       width. 1px;
    `;

    const Icon = styled.svg`
       fill: none;
       stroke: white;
       stroke-width: 2px;
    `;

    const styledCheckbox = style.div`
       display: inline-block;
       width: 12px;
       height: 12px;
       background: ${(props) => (props.checked ? 'DarkOliveGreen' : 'WhiteSmoke')}
       border-radius 50%;
       transition: all 150ms;
       ${Icon} {
           visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
       }
    `

    const CheckboxContainer = styled.div`
       display: inline.block;
       vertical-align: middle;
    
    `;

    const Checkbox = ({className, checked, ...props}) => (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}> </HiddenCheckbox>
            <styledCheckbox checked={checked}>
                <Icon viewbox="0 0 24 24">

                </Icon>

            </styledCheckbox>

        </CheckboxContainer>

    )



    // return (
    //     <div>
    //         <label>
    //             <Checkbox checked={checked} onChange={HandleOnChange}></Checkbox>
    //         </label>
            
    //     </div>
    
    // );

};