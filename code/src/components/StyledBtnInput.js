import styled from 'styled-components/macro'

export const DeleteBtn = styled.button`
    background-color: inherit;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 1rem;

  .btn-icon {
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
}
`
export const InputForm = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 2vh 2vw;

  input {
    border: 2px solid rgb(176, 228, 232);
    box-shadow: 3px 4px 5px rgb(176, 228, 232);
    margin: 2vh 2vw;
    padding: 1rem;
    background-color: inherit;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    display: inline-block;
    transition: all 0.3s;
    width: 60%;
  }
`
export const SubmitBtn = styled.button`
    border-radius: 100%;
    width: 55px;
    height: 55px;
    background-color: inherit;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 2px 3px 4px gray;
    
    .submit-icon { 
        width: 35px;
        height: 35px;
        display: flex;
    justify-content: center;
    align-items: center;

    }
   
`

/* #DECB26 */