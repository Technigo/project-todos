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
    opacity: 1;
`

const Textarea = styled.input`
    width: 95%;

    @media ${devices.tablet} {
        width: 70%;
        }
`

const AddButton = styled.button`
    width: 300px;
    border: none;
    background-color: #ade8f4;
`


const AddTasks = () => {
    return(
        <section>
            <Container>
                <Form>
                    <Label>Add new task here</Label>
                        <Textarea type="textarea"/>
                    <AddButton>
                        Add task
                    </AddButton>
                </Form>
            </Container>
        </section>
    )
}

export default AddTasks