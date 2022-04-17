import { set } from "date-fns";
import styled from "styled-components";


export const CheckBox = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 2.4rem 1.2rem;
    width: 300px;
    height: 150px;
    background-color: #f3f3fa;
    border-radius: 10px;

   

    label {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        
    }
    

    input[type = 'checkbox'] {
    align-self: center;
    border: 1px solid #707bFB;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    }


    input[type = 'checkbox']:checked::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #707bFB;
    border-radius: 50%;
    }

`

export const TaskStatus = styled.div`
    font-weight: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`


export const CompleteStatus = styled.span`
    background: ${(props) => props.background};
    padding: 0.5rem;
    letter-spacing: 0.5px;
    border-radius: 5px;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: #333;
    
`
export const Reminder = styled(CompleteStatus)`
    background-color: #c6d9fa;
`

export const TaskTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`
export const DateCreated = styled.span`
    font-size: 1.4rem;
`