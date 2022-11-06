import styled from 'styled-components';

const ListHeaderStyling = styled.div`

background-color: #f9cc4d; //#972433
width: 19vw;
height: auto;
padding: 1vw;
margin: 2vw;
margin-top: 3vw;
border-radius: 50px;

h2{
    text-align: center;
    color:white;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif; 
    src: url(assets/JosefinSans-VariableFont_wght.ttf);
    
}
@media (max-width: 400px){
width: 27vw;

h2{
    font-size: 16px;
}

}
@media (min-width: 401px) and (max-width:999px){
    width: 23vw;

h2{
    font-size: 16px;
}  
}
`

export default ListHeaderStyling