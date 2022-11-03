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
      border-radius: 25px;
      border: none;
      background: #8080801f;
      width: 100vw;

      &:focus {
        outline: none;
        border: 0.5px solid #96e4a285;
      }
    }

    input[type=date] {
      border: none;
      background: transparent;
      padding: 3px;

      &:focus {
        outline: none;
      }
    }
    
    #dueDateLabel {
      position: absolute;
      right: 22vw;
      top: 32px;
      z-index: 99;
      display: flex;
      flex-direction: column;
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
    background-color: #4CAF50;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-right: 15px;
`
