import styled from 'styled-components'

export const Button = styled.button`
  ${({ removebtn }) =>
    removebtn &&
    `
    border-radius: 50%;
    margin: auto;
    background: #FAFAE5;
    @-moz-document url-prefix(){
      width: 10%;
      display: flex;
      justify-content: center;
   }`}
  ${({ addBtn }) =>
    addBtn &&
    `
    background: #34442F;
    color: #CEE3D5;
    border-radius: 10px;
    margin: 5px;`}
    ${({ clearBtn }) =>
    clearBtn &&
    `
    background: #34442F;
    color: #CEE3D5;
    border-radius: 10px;
    width: 70%;
    font-weight: 600;
    margin: 10px;`}
    border: none;
`
