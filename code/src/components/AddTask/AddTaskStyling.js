import styled from 'styled-components'

export const AddTaskWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    gap:1rem;
    align-items: center;
    border-bottom: 3px solid var(--orange);
    padding-bottom:15px;

  select {
  width: 100%;
  border: 2px solid var(--dark-blue);
  border-radius: 10px;
  padding: 0.25em 0.5em;
  font-size: 1rem;
  font-weight: bold;
  opacity: .8;
  cursor: pointer;
  line-height: 1.1;
  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  text-align: center;
}
    
`

export const AddTaskChildDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width:90vw;
    gap:1rem;

    input[type=text] {
      padding: 6px;
      border-radius: 10px;
      border: 2px solid var(--dark-blue);
      background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
      font-size: 1rem;
      width:10em;

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
