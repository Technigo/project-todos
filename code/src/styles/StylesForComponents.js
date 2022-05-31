import styled from "styled-components/macro"


export const StyledHeader = styled.header`
    margin: 1.5rem;
    padding: 1.3rem;
    background: linear-gradient(200deg, #e3c5f4 0%, #c56bf9 55%);
    border-radius: 10px;
    color: white;
    font-family: "Poppins", sans-serif;
`

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

export const HeaderTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 55%;

    @media screen and (min-width: 1024px) {
        font-size: 2.2rem;
    }
`

export const CurrentTasks = styled.p`
    font-size: 0.8rem;
    width: 40%;
    height: 50px;
    background: white;
    border-radius: 10px;
    color: #060624;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 6px 0px #00000081;

    @media screen and (min-width: 668px) {
        height: 50px;
        width: 35%;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const HeaderGreeting = styled.h2`
    font-size: 1.1rem;
    font-weight: normal;
    margin-bottom: 3px;

    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const HeaderDate = styled.p`
    font-size: 0.9rem;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
`

export const TaskFilterButton = styled.button`
    appearance: none;
    border: none;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.9rem;
    margin: 0;
    background: transparent;
    color: white;
    font-family: "Poppins", sans-serif;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`

export const NewTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1.5rem 1.5rem;
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    color: #000000ec;
`

export const AddTaskTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #fff;

    @media screen and (min-width: 1024px) {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }
`

export const InputDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputTitle = styled.label`
    font-size: 0.9rem;
    color: #fff;

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`

export const TaskInput = styled.input`
    appearance: none;
    border: 2px solid;
    border-color: transparent;
    background: whitesmoke;
    border-radius: 10px;
    padding: 5px;
    margin-top: 6px;
    font-size: 0.9rem;

    &:hover,
    &:active,
    &:focus {
        outline: none;
        border-color: #c56bf9;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
        margin-top: 8px;
        padding: 8px;
    }
`

export const PriorityItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0 2rem;

    @media screen and (min-width: 1024px) {
        margin: 2rem 0 3rem;
    }
`

export const PriorityTitle = styled.p`
    font-size: 0.9rem;
    color: #fff;

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
        margin-bottom: 5px;
    }
`

export const PriorityButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const PriorityButton = styled.button`
    appearance: none;
    border: 2px solid;
    border-color: transparent;
    margin: 10px 10px 0 0;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.8rem;
    width: 60px;
    color: #000000ec;

    &:hover,
    &:active,
    &:focus {
        outline: none;
        border-color: black;
        opacity: 0.7;
    }

    @media screen and (min-width: 1024px) {
        margin: 10px 15px 0 0;
        width: 70px;
        font-size: 1rem;
    }
`

export const StyledTaskList = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    font-family: "Poppins", sans-serif;
`

export const TaskItem = styled.article`
    border: 1px solid pink;
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 10px;
    position: relative;
    overflow-wrap: break-word;
    box-shadow: 0px 1px 2px 0px #b66fdf,
    1px 2px 4px 0px #b66fdf,
    2px 4px 8px 0px #b66fdf,
    2px 4px 16px 0px #b66fdf;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
`
export const TaskTitle = styled.h3`
    margin-bottom: 2.3rem;
    font-size: 1.2rem;
    width: 85%;

    @media screen and (min-width: 1024px) {
        margin-bottom: 3rem;
        font-size: 1.4rem;
        width: 90%;
    }
`

export const TaskDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TaskTag = styled.span`
    font-size: 0.8rem;
    padding: 4px;
    border-radius: 10px;
    text-align: center;
    width: 60px;
    color: #000000ec;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
        width: 80px;
    }
`

export const CheckBox = styled.input`
    width: 1.3rem;
    height: 1.3rem;
`

export const CheckSpan = styled.span`
    margin-left: 1rem;
    background: white;
    border-radius: 10px;
    padding: 5px;
    color: black;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const TaskDate = styled.p`
    font-size: 0.8rem;
    margin-top: 1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const DeleteButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    appearance: none;
    border: none;
    cursor: pointer;
    background: linear-gradient(220deg, #c56bf9 0%, #e3c5f4 80%);
    font-size: 0.8rem;
    color: #000000ec;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    box-shadow: 0px 3px 5px 0px #c56bf9;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 8px 2px #c56bf9d0;
        transition: 0.4s ease-in-out;
    }

    @media screen and (min-width: 1024px) {
        top: 2rem;
        right: 2rem;
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }
`

export const StyledFilter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;

    @media screen and (min-width: 1024px) {
        margin: 0 2rem 0.5rem;
    }
`
export const StyledSelect = styled.select`
    border-radius: 10px;
    background: transparent;
    padding: 3px;
    color: whitesmoke;
    width: 80px;

    &:focus {
        border: 2px solid #e3c5f4;
        outline: none;
    }

    @media screen and (min-width: 1024px) {
        width: 150px;
    }
`

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 2rem;
`

export const FooterButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const CreditText = styled.p`
    margin-top: 2.5rem;
    font-size: 1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`
