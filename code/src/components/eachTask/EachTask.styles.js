import styled from 'styled-components';

export const EachTaskStyles = styled.section`
    background-color: white;
    width: 75vw;
    max-width: 500px; 
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 12px;
    padding: 5px;
`

export const ToggleButtonStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`

export const TaskContentStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

p {
    margin: 2px 0;
}
`

export const DeleteTaskStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`