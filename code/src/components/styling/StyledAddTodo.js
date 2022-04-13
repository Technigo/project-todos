import styled from "styled-components/macro"

export const AddSection = styled.section`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
border: 2px solid red;
border-radius: 5px;
background: #fff;
`

export const AddTextBox = styled.div`
width: 100%;

`

export const AddText = styled.input`
border: 1px solid black;
border-radius: 0;
outline: none;
/* why is it larger than the box that contains it?? */
width: 100%;
&:focus {
  background-color: lightgrey;
}
`

export const AddCategory = styled.div`

& select {
  width: 242px;
}
`

export const AddDeadline = styled.div`
padding-top: 10px;
`

export const AddFeatures = styled.div`
display: flex;
justify-content: space-between;
padding-top: 10px;
`
export const AddOptions = styled.div`
display: flex;
flex-direction: column;
flex-grow: 2;
`

export const AddButtonBox = styled.div`
display: flex;
justify-content: center;
width: 50px;
`