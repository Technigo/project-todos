import styled from 'styled-components';
import background from 'assets/header2.jpg';

const GlobalStyling = styled.section`
display:flex;
flex-direction: row;
flex-wrap: wrap;
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%;
font-family: 'Josefin Sans', sans-serif; 
src: url(assets/JosefinSans-VariableFont_wght.ttf);

h2{
    opacity: 1;
}

label {
    color: white;
    text-align: center;
    margin-top: 2vh;;
}

.outer-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 800px;
}

`

export default GlobalStyling