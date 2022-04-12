import React from 'react'
import styled from 'styled-components'

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

const Container = styled.div`
    width: 375px;
    margin: 0 auto;

    @media ${devices.tablet} {
    width: 768px;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
    margin-top: 15px;
`

const Textarea = styled.input`
    width: 95%;
    padding: 10px;

    @media ${devices.tablet} {
        width: 70%;
        }
`

const AddButton = styled.button`
    width: 300px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px #723c70;
    padding: 6px;
    margin: 7px 0 25px 0;
    background-color: #5c4d7d;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:active {
        box-shadow: 0 4px #5c4d7d;
        transform: translateY(3px);
        transition: 0.3s;
    }

    &:disabled {
        color: #723c70;
    }
`


const AddTasks = () => {
    return(
        <section>
            <Container>
                <Form>
                    <Label>Add new task here</Label>
                        <Textarea type="textarea"/>
                    <AddButton>
                    {/* disabled={xxxx.length < 1} Add when button is working*/}
                        Add task
                    </AddButton>
                </Form>
            </Container>
        </section>
    )
}

export default AddTasks