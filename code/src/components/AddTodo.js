import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'


export const AddTodo = () => {

    const [input, setInput] = useState('')
    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        setIsActive(!isActive)
    }

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('') // This clears the input field
    }

    // This adds input on enter key
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            onAddTodo()
        }
    }

    return(
        <>
        <AddTodoContainer className="AddTodo-container">
            <input className="input-field" 
                onKeyDown={(e) => onEnter(e)}
                placeholder='Add Todo...'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <AddTodoBtn
                className={isActive ? 'btn-active' : 'btn-hidden'}
                disabled={input < 1}
                onClick={() => {
                    onAddTodo()
                    toggleClass()
                  }}
            >
               <span role='img' aria-label='Add'>➕</span>
            </AddTodoBtn>

            {/* <button
                className={isActive ? 'addtask-active' : 'default-button'}
                onClick={toggleClass}
            >
                <p>+</p>
            </button> */}
        </AddTodoContainer>
        </>
    )
}

const devices = {
    mobile: "(max-width: 667px)",
    tablet: "(min-width:668px) and (max-width:1024px)",
    desktop: "(min-width: 1025px)",
  };

const AddTodoContainer = styled.section`
 position: fixed;
 bottom: 150px;

  @media ${devices.mobile} {
        transform: scale(0.8);
        bottom: 180px;
      }

      @media ${devices.tablet} {
        bottom: 300px;
    
      }

`

// const InputField = styled.input`
//     box-shadow: 
//         0px 0px 2px #5f5f5f,
//         0px 0px 0px 5px #ecf0f3,
//         8px 8px 15px #a7aaaf,
//         -8px -8px 15px #ffffff;
//     border: none;
//     color: #555;
//     outline:none;
//     background: none;
//     font-size: 18px;
//     color: #555;
//     margin-bottom: 30px;
//     border-radius: 25px;
//     box-shadow: inset 8px 8px 8px #cbced1,
//                 inset -8px -8px 8px #ffffff;

//     padding: 15px;

// `
const AddTodoBtn = styled.button`
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