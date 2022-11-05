import styled from 'styled-components';
import background from 'assets/road2.jpg';

const GlobalStyling = styled.section`
background-color: #1b2337;
display:flex;
flex-direction: row;
flex-wrap: wrap;
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%;

h2{
    color:black;
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
    height: 950px;
}

`

export default GlobalStyling