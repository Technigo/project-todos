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
width: 21rem;
padding: 0.5rem;
border-radius: 2rem;
gap: 1.2rem;
@media (min-width: 668px) {
      font-size: 1.3rem;
      width: 28rem;
    }
    `

export const Label = styled.label`
display: flex;
`

export const CalendarContainer = styled.div`
position: relative;
width: 20px;
height: 20px;

@media (min-width: 668px) {
  width: 30px;
  height: 30px;
    }
`

export const AddTaskInput = styled.input`
  width: 9rem;
  background-color:transparent;
  border: none;
  border-radius: 20px;
  height: 2rem;
  font-size: 1rem;
  font-family: 'League Spartan', sans-serif;
  padding: 0rem 0.5rem;

  @media (min-width: 668px) {
  padding: 0rem 0.5rem;
  height: 3rem;
  width: 14rem;
  font-size: 1.5rem;
  }


  :focus {
    outline: none;
}
   `
