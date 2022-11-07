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
@media (max-width: 400px){
background-color: white;
opacity: 0.6;
width: 110px;
height: auto;
padding: 1vw;
margin-left: 2vw;
border-radius: 10px;


h2{
    font-size: 16px;

}

}
@media (min-width: 401px) and (max-width:999px){
    max-width: 19vw;

h2{
    font-size: 16px;

}  
}
`

export default ListStyling