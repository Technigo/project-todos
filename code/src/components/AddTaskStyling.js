import styled from 'styled-components'

export const AddNewTaskWrapper = styled.form`
    display: flex;
    flex-direction: column;
    border:solid red;
    /* input[type=text] {
      justify-self: left;
      padding: 18px;
      border-radius: 15px;
      border: none;
      background: pink;
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
    } */
    
`

export const AddNewTaskBtn = styled.button`
    height: 30px;
    width:100px;
    line-height: 20px;
    font-size: 1.1em;
    border-radius: 10px;
    background-color: #7D6E83;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-right: 15px;
    &:hover {
      transform: scale(1.1)
    }
`