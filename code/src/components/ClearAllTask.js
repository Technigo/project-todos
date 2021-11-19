import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import JSConfetti from 'js-confetti';
import { useWindowSize } from '@react-hook/window-size';


const CompleteButton = styled.button`
  background-color: rgb(176, 224, 230);
  height: 3.5em;
  font-family: 'Shippori Antique', sans-serif;
  color: #000;
  background-color: rgb(255, 211, 0, 0.8);
  border: none;
  border-radius: 45px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  outline: none;
  position: absolute;
  left: ${props => props.wid * 0.73}px;

  &:hover {
    background-color: rgb(255, 0, 0, 0.7);
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    background-color: #fff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(-5px);
  }

`;

const ClearAllTask = () => {
  const [width, height] = useWindowSize();
  const jsConfetti = new JSConfetti();
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onDeleteAll = (items) => {
    dispatch(tasks.actions.deleteAll(items));
  };

  const onClearAll = (items) => {
    setTimeout(() => onDeleteAll(items), 1500);
    setTimeout(
      () =>
        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
        }),
      1500
    );
  };

  return (
    <>
      <CompleteButton
        hgt={height} wid={width}
        onClick={() => {
          onClearAll(items);
        }}
      >
        Clear All
      </CompleteButton>
    </>
  );
};

export default ClearAllTask;
