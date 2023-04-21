import styled from 'styled-components';

export const AddTaskStyles = styled.section`
    border: 5px green solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 25px 0;
    width: 90vw;
    max-width: 500px;
    height: 60vw;
    max-height: 500px; 
    margin: 0 auto;
    border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke;
    

h1 {
    font-family: 'Yeseva One', cursive;
    text-align: center;
    margin: 0;
}

form {
    width: 75vw;
    max-width: 500px;
    height: 40vw;
    max-height: 500px; 
    /* border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
    margin: 10px 0 10px 0;
}

label {
    display: flex;
    flex-direction: column;
}

input {
    font-family: 'Merriweather Sans', sans-serif;
    width: 95%;
}
`