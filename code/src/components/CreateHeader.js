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
  align-items: center;
  padding: 15px;
`;

const BackButton = styled.img`
  height: 25px;
`;

const P = styled.p`
  color: #fff;
  font-size: 1rem;
  align-self: center;
`;
