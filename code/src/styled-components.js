import styled from 'styled-components/macro';


export const Container = styled.div`
    width: clamp(250px, 90%, 350px);
    // max-width: 350px;
    margin: 3rem auto 0 auto;
    // margin-top: 3rem;

    @media (min-width: 668px) {
        width: clamp(250px, 90%, 500px);
    }
`

export const Header = styled.header`
    margin: 0;
    display: flex;
    // grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: hsl(21,84%,54%);
        font-size: 3rem;
        margin: 0;
    }
` 

export const Form = styled.form`
    font-size 2rem;
    color: hsl(300, 30%, 60%);
    text-align: center;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr max-content;
    justify-content: start;
    align-content: center;

    input {
        padding: .5em;
        font-size: 1rem;
    }
`

export const NewTaskButton = styled.button`
    // font-size 1rem;
    text-transform: uppercase;
    color: white;
    // padding: .5em;
    min-width: 10ch;
    background-color: hsl(21,84%,54%);
    border-radius: .25rem;
    border: none;
    cursor: pointer;
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
    
    
    // padding: 10px;
    // margin-bottom: 5px;
    margin: 0 auto;
    // position: relative;
    width: 100%;
`

export const SmallButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: 600;
    padding: .5em;
    background-color: hsl(21,84%,54%);
    color: white;
    border: none;
    border-radius: .25rem;
    cursor: pointer;
`

export const GoBackButton = styled.button`
    font-weight: 600;
    padding: .5em;
    background-color: hsl(21,84%,54%);
    color: white;
    border: none;
    border-radius: .25rem;
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

export const TaskLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover TaskInput ~ Checkmark {
        background-color: #ccc;
    }
` 

export const TaskInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

export const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid orange;
    // background-color: blue;
`

export const Footer = styled.footer`
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background: hsl(21,84%,54%);
    color: white;
    text-align: center;
    line-height: 2rem;

    a {
        color: white;
        font-weight: 700;
        text-decoration: none;
    }
`

export const Taskwrapper = styled.div`
    padding: 1rem;
    background-color: hsla(0, 0%, 100%, .8);
    border-radius: .25rem;
    position: relative;
`