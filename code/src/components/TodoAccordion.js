import React, { useState } from 'react';

import { Button, AccordionButton } from '../lib/Button';
import { Image } from '../lib/Image';
import styled from 'styled-components';
import CustomCheckbox from '../lib/CustomCheckbox'

const TodoAccordion = ({ 
  accordionText, 
  accordionDueDate, 
  accordionCategory, 
  accordionCreated, 
  checked, 
  handleOnChange, 
  onRemoveTodo 
  }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState('');


  const toggleAccordion = () => {
    setActive(active === "" ? "open" : "");
    setHeight(
      active === "open" ? "0px" : '70px'
    );
    setRotate(
      active === "open" ? "" : "rotate"
    );
  }
    return (
      <>
        <AccordionButton
          className={`accordion ${active}`} 
          onClick={toggleAccordion}
        >
          <label>
            <CustomCheckbox
            checked={checked}
            onChange={handleOnChange}
          ></CustomCheckbox>
          </label>
          {/* <p>{props.title}</p> */}
          <p>{accordionText}</p>
          
          
          <Img src="../assets/chevron-right-solid.svg" alt="arrow" className={rotate}/>
          <div className="todo__item-delete" onClick={onRemoveTodo}>
          <Image src="./assets/garbage.svg" alt="trash bin"/>
        </div>
        </AccordionButton>    
        <Open
          style={{ height: `${height}` }} 
        >
          <p>Created: {accordionCreated}</p>  
          <p>Due: {accordionDueDate}</p>
          <p>Category: {accordionCategory}</p>        
        </Open> 
      </>
    )
}


export default TodoAccordion;

// const Accordion = styled.div `
// display: flex;
// flex-direction: column;
// width: 100%;
// `

const Img = styled.img `
  margin-left: auto;
  transition: transform 0.6s ease;
  height: 20px;
    &.rotate {
      transform: rotate(90deg);
    }
`
const Open = styled.div `
  background-color: papayawhip;
  overflow: hidden;
`

