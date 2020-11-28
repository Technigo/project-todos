import styled from 'styled-components';

 // Overwriting the default checkbox style so it's not visible but still accessible
 export const HiddenCheckbox = styled.input.attrs({type:"checkbox"})`
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

// Styling for the tick in the checkbox
export const Icon = styled.svg`
 fill: none;
 stroke: rgb(36, 90, 92);
 stroke-width: 3px;
`;

// Overwriting the default checkbox styling with this new styling. Also implementing the tick svg by saying that when the checkbox is checked then show the tick, otherwise don't. This is done by passing props from the checkbox function below (but not 100% about this)
export const StyledCheckbox = styled.div`
 display: inline-block;
 width: 18px;
 height: 18px;
 background: ${(props) => (props.checked ? "#fce4d7" : "")};
 border-radius: 50%;
 border: 2px solid rgb(36, 90, 92);
 transition: all 150ms;
 padding: 5px;
 cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255);
    }
 ${Icon} {
     visibility: ${(props) => (props.checked ? "visible" : "hidden")}
 };
}
 ${HiddenCheckbox} focus + & {
    box-shadow: 0 0 0 3px pink;
 }
`;

//Creating a div around the checkbox
export const CheckboxContainer = styled.div`
 display: inline-block;
 vertical-align: middle;
`;