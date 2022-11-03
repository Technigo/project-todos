/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const StyledTodo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #80808026;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;

    input {
        justify-self: left
    }

    p {
        font-size: 0.7rem;
   }

    .finished {
        opacity: 0.2;
        text-decoration: line-through;

        ~ button {
            opacity: 0.2
        }
    }
`

export const DeleteBtn = styled.button`
    justify-self: right;
    background-color: transparent;
    cursor: pointer;
    border: none;

    img {
        width: 18px;
    }

`
