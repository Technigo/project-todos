import styled from 'styled-components';

 //This gives a hidden checkbox that is still accessible for screenreaders
export const HiddenCheckBox = styled.input.attrs({ type: 'checkbox'})`
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

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
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

export const CheckBoxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;