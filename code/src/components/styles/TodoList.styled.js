import styled from 'styled-components/macro'
import IconUnchecked from '../../images/IconUnchecked.png';
import IconChecked from '../../images/IconChecked.png';

export const Article = styled.article`
padding: 5px 0px;

@media (min-width: ${({ theme }) => theme.tablet}){
  padding: 10px 0px;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`
export const EmptyStateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.body};
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
  }

  p {
    font-style: italic;
    color: ${({ theme }) => theme.colors.body};
    font-size: 1rem;
    display: flex;
  }

  img {
    mix-blend-mode: luminosity;
  }
  @media (min-width: ${({ theme }) => theme.tablet}){
    margin-top: 70px;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
  `

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  label {
    width: inherit;
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

@media (min-width: ${({ theme }) => theme.tablet}){

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
export const TimeStampStyling = styled.p`
  border-radius: 20px;
  padding: 1px 10px;
  font-size: 0.8rem;
  color: #5A7869;
  display: none;
  white-space: nowrap;
  margin-top: 3px;

  @media (min-width: ${({ theme }) => theme.tablet}){
    display: block;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`
export const Deadline = styled.p`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.body};
  `