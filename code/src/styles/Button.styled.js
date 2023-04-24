import styled from 'styled-components'

export const ExpandButton = styled.button`
 color: white;
 background-color: #0062ff;
 border-radius: 20px;
 height: 40px;
 width: 40px;
 font-size: 1.84em;
font-weight: 800;
 position: absolute;
 border: none;
 &:hover{
  background-color: #00b4ff;
  transition: transform ease-in-out 840ms ;

 }

  @media (min-width: 768px) {
    height: 80px;
 width: 80px;
 border-radius: 40px;
 font-size: 2em;
  }
 
 `
export const SubmitButtonWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const SubmitButton = styled.button`
 &:disabled {
   border: 4px solid white;
   background-color: transparent;
   color: white;
   opacity: 0.6;
 }
 &:enabled {
  border: 4px solid white;
   background-color: transparent;
   color: white;
 }
  border: none;
  border-radius: 120px;
  padding: 0.8em 1.4em;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 20px 0 0 0;
  font-weight: 600;
  opacity: 1;
`;

export const TrashBtn = styled.button`
 position: relative;
 left: 95%;
 width: 24px;
 height: 24px;
 border-radius: 50%;
 border: none;
 background:none;
 color: #282828;
 @media (min-width: 768px) {
margin-top: 6px;
  }

 `;

export const Trash = styled.span`
 font-size: 1rem;
 font-weight: 600;
 color: #282828;
 margin: 0 auto;

 `;