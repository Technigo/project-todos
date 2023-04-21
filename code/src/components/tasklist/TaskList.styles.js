import styled from 'styled-components';

export const TaskListStyles = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 90vw;
    max-width: 500px;
    /* height: 100vw; */
    margin: 15px auto;
    border: 3px black solid;
    border-radius: 12px;
    background-color: whitesmoke;

h2, h3 {
    font-family: 'Yeseva One', cursive;
    text-align: center;
}
`

export const IncompleteListStyles = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
    min-height: 150px;

img {
    display: block;
    margin: 0 auto;
    width: 70%;
    object-fit: cover;
    border-radius: 12px;
    opacity: 75%;
}
`

export const CompleteListStyles = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
    min-height: 150px;

p {
    text-decoration: line-through;
}

img {
    display: block;
    margin: 0 auto;
    width: 70%;
    object-fit: cover;
    border-radius: 12px;
    opacity: 75%;
}
`