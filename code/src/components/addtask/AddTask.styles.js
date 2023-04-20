import styled from 'styled-components';

export const AddTaskStyles = styled.section`
    /* border: 5px green solid; */
    display: flex;
    flex-direction: column;
    align-items: center;

h1 {
    font-family: 'Yeseva One', cursive;
    text-align: center;
    margin: 0;
}

form {
    width: 50vw;
    height: 20vw;
    border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
    margin: 25px 0 10px 0;
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