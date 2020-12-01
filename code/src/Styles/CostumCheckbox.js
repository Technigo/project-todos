import styled from 'styled-components'

export const Icon = styled.svg`
    fill: none;
    stroke: #E9E9CE;
    stroke-width: 2px;
    `

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
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
`
export const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 5px;
    border: 1px solid #FAFAE5;
    ${({checked}) => checked && `
    background: #34442F;`}
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
        visibility: ${({checked}) => checked ? 'visible' : 'hidden'}
    }
    `

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    `

