import styled from "styled-components";

export const IconButton = styled.button`
    border: none;
    background-color: transparent;
    transition: all 0.4s ease;


    &:hover {
        transform: scale(1.5);
    }

`

export const AddTaskForm = styled.form`
    display: flex;
    flex-direction: column; 
    gap: 2.4rem;
`

export const InputTaskContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background-color: #F3E0F0;
        border: none;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    button:hover {
        background-color: #F3F5F8;
    }

`

export const InputNewTask = styled.input`
    border: none;
    outline: none;
    font-size: 2.8rem;
    font-weight: 700;
    padding: 3.2rem 1.2rem 3.2rem 0;
    width: 70%;
   
`

export const DateCreated = styled.div`
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        color: #333;
        letter-spacing: 0.4px;
    }
`

export const DueDateInput = styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    input {
        font-size: 1.6rem;
        color: #333;
        /*::-webkit-datetime-edit { padding: 1em; }*/
        ::-webkit-datetime-edit-fields-wrapper { background: #fff; }
        ::-webkit-calendar-picker-indicator { background: none; cursor: pointer;}   
    }
`
export const CategorySelector = styled.label`

    select {
        background-color:${props => props.background} ;
        padding: 1rem 1.2rem;
        border-radius: 10px;
        font-size: 1.4rem;
        letter-spacing: 0.5px;
        text-align: center;
    }

`

export const NoteTextArea = styled.textarea`
        font-size: 1.6rem;
`

export const SubmitTaskBtn = styled.button`
    background-color: #707BFB;
    border: none;
    color: white;
    align-self: center;
    width: 15rem;
    padding: 1.6rem 2.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.4s ease;

    &:hover {
      background-color: #fff;
      border: solid 1.5px #707BFB;
      color: #707BFB;
      font-size: 2rem;
    }

`
