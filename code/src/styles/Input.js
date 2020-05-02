import styled from 'styled-components'

export const TextInput = styled.input`
   all: unset;
   width: 96%;
   height: 36px;
   border-radius: 4px;
   border: 1px solid rgb(208, 208, 208);
   padding: 0 8px; 

   ::placeholder{
      color: rgb(30, 30, 30);
   }

   ::-ms-input-placeholder{
      color: rgb(30, 30, 30);
   }

   :-ms-input-placeholder{
      color: rgb(30, 30, 30);
   }
`;







