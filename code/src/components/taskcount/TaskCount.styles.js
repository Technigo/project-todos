import styled from 'styled-components';

export const TaskCountStyles = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    width: 90vw;
    max-width: 500px;
    height: 30vw;
    max-height: 125px; 
    margin: 15px auto;
    border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke;
    
div {
    display: flex;
    flex-direction: column;
    width: 45%;
    text-align: center;
}

p {
    margin: 2px;
}

h3 {
    font-family: 'Yeseva One', cursive;
    text-align: center;
}
`