import styled from 'styled-components'

export const AddTodoForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`

export const FormTextArea = styled.input`
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid black;
    background-color: rgba(123,104,238,0.1);
    margin-right: 10px;
`

export const SubmitButton = styled.button`
    border: none;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
`