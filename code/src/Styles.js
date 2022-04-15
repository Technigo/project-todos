import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  background: rgb(255,250,250, 0.5);
  height: 100vw;
`

export const TodoContainer = styled.section`
  height: fit-content;
  width: 330px;
  background: rgb(240,220,255,0.1);
  margin: 25px;
  padding: 20px;
  border: 1px solid #FFAB76;
  border-radius: 10px;
  @media (min-width: 667px) {
    width: 500px
  }
  @media (min-width: 1024px) {
    width: 800px
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`

export const Input = styled.input`
  width: 80%;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-style: oblique;
  margin: 5px;
  padding: 10px;
`

export const AddButton = styled.button`
  color: #FFAB76;
  border: 1px solid #dcdcdc;
  background: #fff;
  padding: 0;
  margin: 10px;
  width: 18px;
  height: 18px;
  border-radius: 10px;
`

export const TodoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoItem = styled.article`
  position: relative;
  background: #fff;
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5px;
  word-wrap: break-word;
`;

export const DoneButton = styled.input`
  opacity: 0;

  + label {
    position: relative;
    padding-left: 10px;
    cursor: pointer;
    display: inline-block;
    color: #697482;
    line-height: 25px;
    &:before, &:after {
      content: "";
      position: absolute;
      left: -11px;
      top: 5.5px;
      width: 15px;
      height: 15px;
      border-radius: 10px;
    }
    &:before {
      outline: 2px solid #aaa;
    }
  }
    &:checked + label:before {
      outline: 2px solid #FFAB76;
  }
    &:checked + label {
      color: #FFAB76;
      text-decoration: line-through;
}
    &:checked + label:after {
      background-image: url("/assets/check.png");
      background-size: cover;
      transform: scale(0.8);
      opacity: 1;
      transition: all .3s ease;
  }
    &:not(:checked) + label:after {
      transform: scale(0);
      opacity: 0;
}
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const TodoNumber = styled.h4`
  color: #FFAB76;
  `