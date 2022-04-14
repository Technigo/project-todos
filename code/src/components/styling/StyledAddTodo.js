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

export const AddForm = styled.form`
display: flex;
`

export const AddOptions = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`


export const AddText = styled.input`
width: 100%;
/* why is it larger than the box that contains it?? */
  border-radius: 5px;
  border: 1px solid #000;

`

export const AddCategory = styled.select`
width: 100%;
  /* background-color: #fff;
  border-radius: 5px;
  border: 1px solid #000;
  color: inherit;
  font-family: inherit;
  font-size: 100%; */
  margin-top: 10px;

`

export const AddDeadline = styled.div`
padding-top: 10px;
`


export const AddButtonBox = styled.div`
display: flex;
justify-content: center;
width: 50%;
`