import styled from 'styled-components';

export const AddTaskWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding-bottom: 1rem;
position: relative;
z-index: 3;
`
export const Form = styled.form`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: white;
width: 25rem;
padding: 0.5rem;
border-radius: 2rem;
gap: 1.2rem;`

export const Label = styled.label`
display: flex;
`

export const CalendarContainer = styled.div`
position: relative;
width: 30px;
height: 30px;
`

export const AddTaskInput = styled.input`
  width: 100%;
  background-color:transparent;
  border: none;
  border-radius: 20px;
  height: 3rem;
  font-size: 1.3rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  :focus {
    outline: none;
}
   `
