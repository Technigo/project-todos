import React from "react"
import styled from "styled-components"
// import { useDispatch } from "react-redux"



const StyledStartBtn = styled.button`
    background-color: #333;
    color: #80B477;
    border: none;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 5px -6px;
`

const StartBtn = () => {
    // const dispatch = useDispatch()

    return (

        <StyledStartBtn className='pulse'>
            {/* onClick={() => dispatch(store.startAdding())} */}
            <i className="fas fa-plus"></i>
        </StyledStartBtn>

    )
}

export default StartBtn