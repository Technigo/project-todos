import styled from 'styled-components'

export const PositionBtn = styled.div`
display: flex;
position: relative;
left: 280px;
top: -90px;
`
export const ExpandButton = styled.button`
color: white;
background-color: #FFB800;
border-radius: 50%;
height: 50px;
width: 50px;
position: absolute;
border: none;
`

export const SubmitButton = styled.button`
&:disabled{
  border: 2px solid #FFB800;
  background-color: transparent;
  color: #FFB800;
}
background-color: #FFB800;
border: none;
width: 120px;
height: 40px;
border-radius: 20px;
color: #ffff; 
font-size: 0.8rem;
text-transform: uppercase;
font-weight: 600;
left: 29%;
position: relative;
`