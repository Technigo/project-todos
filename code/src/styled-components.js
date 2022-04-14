import styled from 'styled-components/macro';


export const Container = styled.div`
    width: clamp(250px, 90%, 350px);
    // max-width: 350px;
    margin: 3rem auto 0 auto;
    // margin-top: 3rem;

    @media (min-width: 668px) {
        // max-width: 500px;
        width: clamp(250px, 90%, 500px);
    }

    // @media (min-width: 1100px) {
    //     max-width: 700px
    // }
`

export const Header = styled.header`
    // font-size: 2rem;
    // padding-left: 1rem;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    h1 {
        font-size: 3rem;
        margin: 0;
    }

// font-size: 4rem;
    // color: black;
    // text-shadow: 2px 2px white,
    //     4px 4px hsl(0, 0%, 20%);
    // text-align: center;
    // margin: 0;
    // padding: 3rem;

    // @media (min-width: 668px) {
    //     font-size: 3rem;
    // }

    // @media (min-width: 1100px) {
    //     width: 700px
    // }
` 

export const Form = styled.form`
    font-size 2rem;
    color: hsl(300, 30%, 60%);
    text-align: center;
    width: 100%;
    margin: 0 auto;
`

export const NewTaskButton = styled.button`
    font-size 1rem;
    // text-align: center;
    padding: 1em;
    background-color: orange;
    border: none;
    width: fit-content;
`

export const TaskCounter = styled.div`
    display: grid;
    font-size: clamp(1rem, 5vw + 1rem, 1.5rem);
    
    // @media (min-width: 668px) {
    //     grid-template-columns: repeat(3, 1fr);
    //     justify-items: center;
    // }
`
export const TaskItem = styled.div`
    // border: 1px solid #dcdcdc;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    // margin-bottom: 5px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`

export const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
`

export const GoBackButton = styled.button`
    border: none;
    cursor: pointer;
`

export const Input = styled.input`
    background: none;
    border: 2px solid pink;
`

export const Tasklist = styled.div`
    display: grid;
    gap: 2rem;
`