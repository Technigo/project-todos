import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 45px;
  font-size: 1rem;
  letter-spacing: 2.5px;
  font-weight: 500;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;

// export const Button = styled.button `
//   width: 100%;
//   border: 2px solid #3d5f6b;
//
//   background: transparent;
//   padding: 10px;
//   font-size: 16px;
//   font-family: 'Architects Daughter', cursive;
//   display: flex;
//   justify-content: center;
//   &:first-child {
//     margin-right: 10px;
//   }
//    &:hover {
//     background-color: #3d5f6b;
//     border: none;
//     color: #fff;
//    }
// `
