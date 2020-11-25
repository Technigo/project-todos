import styled from 'styled-components'

export const Button = styled.button`
    ${({removebtn}) => removebtn && `
    border-radius: 50%;
    background: #FAFAE5;`}
    border: none;
    `
