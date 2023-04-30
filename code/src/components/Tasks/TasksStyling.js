import styled from 'styled-components/macro'

export const NewTaskContainer = styled.div`
background-color: rgb(246, 230, 194);
position:absolute;
bottom:0;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
bottom:0;
width:100vw;
color: rgb(71 69 69);
font-size: 1em;
gap:1em;
button{
color: rgb(71 69 69);
font-size: 1em; 
  :hover{
   transform: scale(1.3);
   color: #EA8FEA;
}
}
li{
display:flex;
  font-size: 1em;
  a{
  color: rgb(71 69 69);
  :hover{
   transform: scale(1.2);
   color: #EA8FEA;
}
  }
}

  @media (min-width: 768px) {
    font-size: 2rem;
    li{
      font-size: 2rem;
    }
  }

`

export const TaskPageContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
box-sizing: border-box;
min-height:100%;
`

export const TaskCardContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
box-sizing: border-box;
gap:0;
padding:0.5em;
border:rgb(184, 184, 184) solid 3px;
border-radius:25px;
position:relative;
margin: 0.8em;
width:90%;
background-color:#F6E6C2;

    @media (min-width: 768px) {
        font-size:2em;
    }
`

export const TaskListContainer = styled.div`
margin:2em 0;
padding:1em 1em 2em;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
box-sizing: border-box;
gap:1em;
border-radius:25px;
height:100%;
`

export const TaskText = styled.p`
margin:0;
overflow-wrap: break-word;
width:187px;
`

export const DateText = styled.p`
margin:0;
font-size:0.6em;
`