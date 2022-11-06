import styled from 'styled-components';
import background from 'assets/header2.jpg';

const GlobalStyling = styled.section`
display:flex;
flex-direction: row;
flex-wrap: wrap;
background-repeat: no-repeat;
background-image: url(${background});
background-size: 100%;
min-width: 400px;
font-family: 'Josefin Sans', sans-serif; 
src: url(assets/JosefinSans-VariableFont_wght.ttf);
margin: 0px;

h2{
    opacity: 1;
}

label {
    color: white;
    text-align: center;
    margin-top: 2vh;
}

.outer-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 800px;
}

@media (max-width: 400px){
max-width: 19vw;
background-size: 160%;


.outer-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 250px;
}

h2{
    font-size: 16px;

}

}
@media (min-width: 401px) and (max-width:999px){
    background-size: 180%;

h2{
    font-size: 16px;

}  
.outer-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 310px;
    
}
}

`

export default GlobalStyling