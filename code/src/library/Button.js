import styled from 'styled-components'

export const Button = styled.button`
    ${({removebtn}) => removebtn && `
    border-radius: 50%;
    margin: auto;
    background: #FAFAE5;`}
    ${({addBtn}) => addBtn && `
    background: #63C6B4;
    border-radius: 10px;
    margin: 5px;`}
    ${({clearBtn}) => clearBtn && `
    background: #63C6B4;
    width: 70%;`}
    border: none;
    
    `
