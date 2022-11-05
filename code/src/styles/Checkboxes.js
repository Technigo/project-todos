/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import Check from '../images/Check.jpg'

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const Checkboxes = styled.span`
  position: absolute;
  top: 3px;
  left: 1vw;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 18px;
  border: solid 1px lightgrey;

  @media (min-width: 668px) and (max-width: 1024px) {
  height: 20px;
  width: 20px;
} 
  @media (min-width: 1025px) {
  height: 20px;
  width: 20px;
} 
  
  &.done {
    background-image: url(${Check});
    background-size: contain;
    border: #4ac902 solid 3px;
  }
  &.notDone {
    background: white;
  }`

export const CheckboxesHidden = styled.input`
  position: absolute;
  top: 3px;
  left: 1vw;
  opacity: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
  z-index: 1;
  
  @media (min-width: 668px) and (max-width: 1024px) {
  height: 20px;
  width: 20px;
} 
  @media (min-width: 1025px) {
  height: 20px;
  width: 20px;
} 
`
export const LabelP = styled.label`
  text-decoration: underline;
  font-size: 16px;
`