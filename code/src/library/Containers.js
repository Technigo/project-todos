import styled from 'styled-components'

export const Main = styled.main`
${({noList}) => noList?`height: 100vh;`:`height:100%;`}
background-image: linear-gradient(45deg, #4e6048, #70836d, #93a895, #b8cebf);
display: grid;
grid-template-column: 1fr;
grid-template-rows: min-content;
justify-content: center;
padding: 10px;
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
align-self: center;
height: 100%;
justify-content: end;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: min-content; 
border-radius: 10px;
`}
justify-content: center;
width: 100%;
margin: 15px;
max-width: 90%;
}
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
text-align: center;
`

export const ListWrapper = styled.ul`
width: 100%;
margin: 0;
padding: 0;
`