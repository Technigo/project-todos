/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={toggleSidebar}>{isOpen ? '←' : 'Need tips?'}</Button>
      <SidebarContent isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>Close</CloseButton>
        <Link href="https://bestself.co/blogs/articles/10-daily-planning-techniques-that-help-you-work-smarter-and-save-yourself-hours-2" target="_blank"> 🍀 10 Daily Planning Techniques!</Link>
        <Link href="https://pomofocus.io/" target="_blank">🍅 Pomodoro Timer</Link>
        <Link href="https://www.youtube.com/watch?v=SdJiiuPF7CI" target="_blank"> 🍌Youtube: Get Stuff Done</Link>
      </SidebarContent>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Button = styled.button`
  pointer-events: auto;
  position: absolute;
  top: 90%;
  left: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  transform: translateY(-50%);
  z-index: 2;
  margin: 5px;
  padding: 10px 30px;
  background: rgba(176, 203, 163, 0.37);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(148, 178, 134, 0.29);
  /* From https://css.glass */
  background: rgba(50, 178, 134, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(148, 178, 134, 0.29);
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  /* &:hover {
    left: ${({ isOpen }) => (isOpen ? '210px' : '-10px')};
  } */
`;

const SidebarContent = styled.div`
  pointer-events: auto;
  position: absolute;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: #264e49c9;
  padding: 20px;
  transition: all 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Link = styled.a`
  display: block;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Sidebar;
