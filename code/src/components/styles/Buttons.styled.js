import styled from 'styled-components'


export const AddTaskButton= styled.button`
  background-color: pink;
  color: white;
  font-weight: 600;
  background-color: #4C5154;
  padding: 5px 5px;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #04B18F;
  }
`

export const RemoveTaskButton = styled.img`
  position: absolute;
  right: 0;
  top: 3px;

  &:hover {
    animation: jelly .5s ease;
  }

  @keyframes jelly {
  from {
    transform: scale(1, 1);
  }

  30% {
    transform: scale(1.25, 0.75);
  }

  40% {
    transform: scale(0.75, 1.25);
  }

  to {
    transform: scale(1, 1);
  }
  }
`

export const FilterButton = styled.button`
  border-left: 2px solid ${(props) => (props.color)};
  padding-left: 5px;
  margin: 10px 10px 20px 0;
  color: #706B6B;
  font-size: 1em;

  &:focus {
    font-weight: 600;
  }

  &:active {
    font-weight: 600;
  }
` 