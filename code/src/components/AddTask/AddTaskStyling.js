import styled from 'styled-components'

export const AddTaskWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    gap:1rem;
    align-items: center;
    border-bottom: 3px solid var(--orange);
    padding-bottom:15px;

    #addTaskInput {
      padding: 6px;
      border-radius: 5px;
      border: 2px solid var(--dark-blue);
      font-size: 1rem;
      width:90vw;

        &:focus {
          border: 2px solid var(--orange);
        }
    }
    
    input::placeholder {
      font-weight: bold;
      opacity: .8;
    }

        
`

export const AddTaskChildDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap:1rem;
  width:90vw;

  select {
    width: 100%;
    border: 2px solid var(--dark-blue);
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;
    line-height: 1.1;
    background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    font-size: 1rem;
    font-weight: bold;
    opacity: 0.8;
    width:50%;
    
    .select-title{
      color: grey;
      text-align: left;
    }
  }

  .react-datepicker-wrapper {
    display:flex;
    width:auto;
  }

  .datePicker {
    display: flex;
    padding: 6px;
    border-radius: 10px;
    border: 2px solid var(--dark-blue);
    background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    font-size: 1rem;
    cursor: pointer;
    width:7em;
    margin:0;
   
  }

  
`;
