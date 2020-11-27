import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreateHeader = () => {
  return (
    <Header>
      <Link to="/">
        <BackButton
          src="../assets/left-arrow.svg"
          alt="back arrow icon"
          role="button"
        />
      </Link>
      <P>Add New Task</P>
    </Header>
  );
};

export default CreateHeader;

const Header = styled.header`
  height: 10vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

const BackButton = styled.img`
  position: absolute;
  top: 30px;
  left: 15px;
  height: 20px;
`;

const P = styled.p`
  color: #fff;
  font-size: 1rem;
  align-self: center;
`;
