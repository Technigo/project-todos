import styled from 'styled-components';

const ListStyling = styled.div`

background-color: white;
opacity: 0.6;
width: 20vw;
height: auto;
padding: 1vw;
margin-left: 2vw;
border-radius: 10px;

p {
    color: black;
    opacity: 1;
}

article{
display:grid;
grid-template-columns: 6fr 3fr 1fr;
grid-template-rows: 3fr;
}
`

export default ListStyling