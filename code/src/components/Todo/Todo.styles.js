/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const StyledTodo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    margin-bottom: 10px;
    background: #ede4e0;
    border: 1px solid #80808026;
    border-radius: 10px;
    justify-content: space-between;
    animation-name: fade-in;
    animation-duration: .9s;

    @keyframes fade-in{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;   
        }
    }


    #customCheck {
        display: flex;
        gap: 2rem;

       span {
            cursor: pointer;
        }
    }

    .dateTime {
        font-size: 0.8rem;
        padding-top: 1rem;
    }

 
    .finished {

        label, p {
        opacity: 0.8;
        text-decoration: line-through;
        }
    }
`

export const DeleteBtn = styled.button`
    justify-self: right;
    background-color: transparent;
    cursor: pointer;
    border: none;

    img {
        width: 20px;
    }

`
