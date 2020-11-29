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
${({outerWrapper}) => outerWrapper && `
background: white;
-webkit-box-shadow: 5px 4px 15px -1px #000000;
box-shadow: 5px 4px 15px -1px #000000;
padding: 10px;
justify-self: center;
align-self: baseline;
height: 90%;
justify-content: end;
overflow-y: scroll;
box-sizing: content-box;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: min-content;
`}
justify-content: center;
width: 100%;
margin: 5px;
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