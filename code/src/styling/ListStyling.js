import styled from 'styled-components';

const ListStyling = styled.div`

background-color: white;
opacity: 0.6;
width: 19vw;
height: auto;
padding: 1vw;
margin-left: 2vw;
border-radius: 10px;

p {
    color: black;
    opacity: 1;
}

h2{
    font-size: 18px;

}

article{
display:grid;
grid-template-columns: 6fr 3fr 1fr;
grid-template-rows: 4fr;
}
`

export default ListStyling