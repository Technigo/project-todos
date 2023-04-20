import styled from 'styled-components'

export const AddTaskWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap:1rem;
    align-items: center;
    border:solid red;

    input[type=text] {
      padding: 18px;
      border-radius: 15px;
      border: 2px solid var(--dark-blue);
      background: var(--white);
      font-size: 1rem;

        &:focus {
          border: 2px solid var(--orange);
        }
    }
    
    input::placeholder {
      font-weight: bold;
      opacity: .8;
    }

    #datePicker {
      padding: 3px;
      border-radius: 8px;
      cursor: pointer;
      width: 6em;
    }

    .react-datepicker__input-container {
        display: flex;
        margin:0;
        padding:0;
    }
    
`

export const AddTaskChildDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap:1rem;
    border:solid pink;
`
