import styled from 'styled-components'


export const devices = {
    mobile: "(max-width: 667px)",
    tablet: "(min-width:668px) and (max-width:1024px)",
    desktop: "(min-width: 1025px)",
  };

  // TodoList STYLING
export const HeaderH1 = styled.h1`
    margin: 0;
    font-family: 'Staatliches', cursive;
    letter-spacing: 2px;
    font-size: 40px;
    color: rgb(255, 142, 77);
    text-shadow: 3px 3px 3px rgba(255, 124, 135, 0.5);
`

export const CompleteContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    @media ${devices.mobile} {
        transform: scale(0.8);
        margin: 0 40px;
      }
`

export const CurrentTask = styled.div`
    font-size: 20px;
    padding: -70px 0;
    z-index: 10;
`

export const DateP = styled.p`
    font-size: 12px;
    margin: 0;
`

export const TaskWrapper = styled.section`
    max-height: 400px;
    width: 400px;

    @media ${devices.mobile} {
        max-height: 250px;
      }
`
export const TodoSection = styled.section`
    overflow: auto;
`

export const DeleteBtn = styled.div`
    position: relative;
    float: right;
    padding: 10px;
    margin: 0 20px;
    border-radius: 10px;
    border: none;
    box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);
    cursor: pointer;

    &:hover {
        box-shadow: 
    0px 0px 2px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaaf,
    -8px -8px 15px #ffffff;

    box-shadow: inset 8px 8px 8px #cbced1,
            inset -8px -8px 8px #ffffff;
    }
`

export const FirstHalf = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Checkboxes = styled.input`
    margin: 0;
    cursor: pointer;
    appearance: none;
    background-color: white;
    color: black;
    width: 30px;
    height: 30px;
    border: 2px solid rgb(255, 175, 130, .8);
    border-radius: 20px;
    display: grid;
    place-content: center;

    &::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transform: scale(0); //Starts as blank
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rgb(255, 175, 130, .8);
    }

    &:checked::before {
    transform: scale(1);
    }
`

// CompleatedAllTodos STYLING
export const CheckAllBtn = styled.button`
    border-radius: 50px;
    height: 40px;
    width: 80px;
    border: none;
    align-self: center;
    cursor: pointer;
    color: black;
    box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);

    &:hover {
        box-shadow: 
    0px 0px 2px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaaf,
    -8px -8px 15px #ffffff;

  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
    transition: ease-in 0.4s;
    }
`
// AddTodo STYLING
export const AddTodoContainer = styled.section`
    position: fixed;
    bottom: 150px;

  @media ${devices.mobile} {
        transform: scale(0.8);
        bottom: 150px;
      }

      @media ${devices.tablet} {
        bottom: 300px;
      }
`

export const InputField = styled.input`
    box-shadow: 
        0px 0px 2px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaaf,
        -8px -8px 15px #ffffff;
    border: 1px solid #555;
    color: #555;
    outline:none;
    background: none;
    font-size: 18px;
    color: #555;
    margin-bottom: 30px;
    border-radius: 25px;
    padding: 15px;
`
export const AddTodoBtn = styled.button`
    padding: 15px;
    border-radius: 10px;
    margin: 10px;
    border: none;
    box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);
    cursor: pointer;

    &:hover {
        box-shadow: 
    0px 0px 2px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaaf,
    -8px -8px 15px #ffffff;

    box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
    transition: ease-in 0.4s;
    }
`

// APP STYLING
export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProviderContainer = styled.section`
  position: relative;
  min-height: 600px;
  min-width: 400px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  background: rgb(236, 240, 243);
   box-shadow: 
              -3px -3px 30px rgb(255, 175, 130, .8),
              3px 3px 30px rgb(255, 175, 130, .8);

  @media ${devices.tablet} {
    margin: 100px 0;
    width: 400px;
    min-width: 40px;

  }

  @media ${devices.mobile} {
    margin: 50px;
    min-width: 40px;
    width: 200px;
    min-height: 400px;
    height: 450px;


  }

  @media ${devices.desktop} {
    margin: 100px 700px;

  }

`