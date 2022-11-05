import styled from 'styled-components/macro'
import IconUnchecked from '../../images/IconUnchecked.png';
import IconChecked from '../../images/IconChecked.png';

export const Article = styled.article`
padding: 5px 0px;
display: flex;
align-items: flex-start;
flex-direction: column;

@media (min-width: 668px){
  padding: 10px 0px;

  }
  @media (min-width: 1025px){
    
  }
`
export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  label {
    width: 100%;
  }
  
  input[type="checkbox"] {
  opacity: 0;
}

input[type="checkbox"] + p {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  display: inline-block;
  line-height: 30px;
}

input[type="checkbox"] + p::after{
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  width: 30px;
  height: 30px;
  background-image: url(${IconUnchecked});
  background-size: cover;
}


input[type="checkbox"]:checked + p::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 30px;
  height: 30px;
  background-image: url(${IconChecked});
  background-size: cover;
  z-index: 1;
  transform: scale(1);
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

input[type="checkbox"] + p::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 30px;
  height: 30px;
  background-image: url(${IconChecked});
  background-size: cover;
  transform: scale(0);
  opacity: 0;
}

@media (min-width: 668px) {

  input[type="checkbox"] + p {
    padding-left: 30px;
  }
  
  input[type="checkbox"]:checked + p::before, input[type="checkbox"] + p::after, input[type="checkbox"]:checked + p::after {
    top: -5px;
    width: 40px;
    height: 40px;
  }
}
`
// const TimeStampStyling = styled.p`
//   font-size: 0.8rem;
//   color: #5A7869;
//   padding-left: 28px;
//   margin-top: -6px;
// `