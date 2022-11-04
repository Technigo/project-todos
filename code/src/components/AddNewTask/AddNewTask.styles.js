/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const AddNewTaskWrapper = styled.form`
    align-self: center;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    input[type=text] {
      justify-self: left;
      padding: 15px;
      border-radius: 15px;
      border: none;
      background: #ede4e0;
      width: 100vw;
      outline: none;
      font-size: 1rem;
      }

    input::placeholder {
      font-weight: bold;
      opacity: .5;
    }

      &:focus {
        outline: none;
        border: 0.5px solid #9F73AB;
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
`
