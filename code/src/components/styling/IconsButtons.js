import styled from "styled-components/macro"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import { faCircle } from '@fortawesome/free-regular-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faEraser } from '@fortawesome/free-solid-svg-icons'
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
// import { faBuilding } from '@fortawesome/free-solid-svg-icons'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
// import { faPerson } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const DeleteTodoButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-left: 0.5rem;
`
export const CategoryIcon = styled.span`
font-size: 28px;
margin-right: 10px;
`

export const ToggleIcon = styled.span`
font-size: 20px;
margin-right: 10px;
`

export const HandleIcon = styled(FontAwesomeIcon)`
margin-right: 10px;
`

export const AddButton = styled.button`
display: inline-block;
border: none;
padding: 0;
background: transparent;
color: #000;
font-size: 3rem;
cursor: pointer;
text-align: center;
width: fit-content;
margin-left: 10px;

&:disabled {
  color: red;
}
`

export const ActionButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;

  &:disabled {
    color: red;
    cursor: default;
  }
`

export const FilteringButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;

  &:disabled {
    font-size: 2rem;
    cursor: default;
  }
`