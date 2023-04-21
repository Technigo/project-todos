import styled from 'styled-components';

export const DeleteButton = styled.button`
color: rgba(255, 255, 255, 1);
margin: 20px;
font-size: 17px;
text-transform: lowercase;
cursor: pointer;
font-family: Montserrat Alternates;
font-weight: 400;
width: 200px;
height: 50px;
background: rgba(255, 255, 255, 0.08);
border-radius: 20px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.5px);
-webkit-backdrop-filter: blur(1.5px);
border: 1px solid rgba(255, 255, 255, 0.16);
transition: transform;
transition-duration: 0.5s;
overflow: hidden;

:hover {
        transform: translateY(-18%);
        :before {
        transition: ease;
        transition-duration: 1s;
        left: 110%;
    }
    }
    
::before {
    content: "hover";
    color:  rgba(255, 255, 255, 0.01);
    background-color: rgba(255, 255, 255, 0.4);
    display: inline-block;
    width: 30%;
    height: 100%;
    top: 0%;
    transform: skew(45deg);
    position: absolute;
    transition: transform;
    transition-duration: 0.5s;
    left: -100%;
  }`

export const SubmitButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: rgba(255, 255, 255, 1);
font-size: 17px;
text-transform: lowercase;
cursor: pointer;
font-family: Montserrat Alternates;
font-weight: 400;
width: 45px;
height: 43px;
background: rgba(255, 255, 255, 0.08);
border-radius: 60%;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.5px);
-webkit-backdrop-filter: blur(1.5px);
border: 1px solid rgba(255, 255, 255, 0.16);
transition: transform;
transition-duration: 0.5s;

:hover {
        transform: translateY(-18%);
    }`