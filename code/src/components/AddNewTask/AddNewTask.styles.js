/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const AddNewTaskWrapper = styled.form`
    align-self: center;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    input[type=text] {
      justify-self: left;
      padding: 18px;
      border-radius: 15px;
      border: none;
      background: #ede4e0;
      width: 100vw;
      outline: none;
      font-size: 1rem;

        &:focus {
          outline: none;
          border: 1.5px solid black;
        }

    }

    input::placeholder {
      font-weight: bold;
      opacity: .8;
    }

    
    #dueDate {
      position: absolute;
      right: 70px;
      z-index: 99;
      padding: 3px;
      border-radius: 8px;
    }

   
`

export const AddNewTaskBtn = styled.button`
    position: absolute;
    z-index: 99;
    height: 30px;
    line-height: 20px;
    width: 30px;
    font-size: 1.1em;
    border-radius: 50%;
    background-color: #7dbc66;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-right: 15px;

    &:hover {
      transform: scale(1.1)
    }
`
