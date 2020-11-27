import styled from 'styled-components'

export const Main = styled.main`
background: #FAFAE5;
height: 100vh;
display: grid;
grid-template-column: 1fr;
grid-template-rows: min-content;
justify-content: center;
`

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
${({outerWrapper}) => outerWrapper ? `
justify-content: end;`:`justify-content: center;`}
width: 100%;
`

export const UserInputBox = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const InputText = styled.textarea`
margin: 5px;
border: none;
`

export const ListWrapper = styled.ul`
width: 100%;
margin: 0;
padding: 0;
`