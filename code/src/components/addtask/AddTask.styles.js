import styled from 'styled-components';

export const AddTaskStyles = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 90vw;
    max-width: 500px;
    /* height: 60vw; */
    max-height: 550px; 
    margin: 0 auto;
    border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke;

    

h2 {
    font-family: 'Yeseva One', cursive;
    text-align: center;
    margin: 10px 0;
}

form {
    width: 75vw;
    max-width: 500px;
    height: 40vw;
    max-height: 500px; 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
}

label {
    display: flex;
    flex-direction: column;
    max-width: 350px;
}

input, select {
    font-family: 'Merriweather Sans', sans-serif;
    width: 275px;
}

/* select {
    font-family: 'Merriweather Sans', sans-serif;
    width: 302px;
} */

/* form div {
    display: flex;
    flex-direction: column;
    align-items: center;
} */
`