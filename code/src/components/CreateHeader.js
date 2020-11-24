import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreateHeader = () => {
  return (
    <header>
      <Link to="/">
        <BackButton
          src="../assets/left-arrow.svg"
          alt="back arrow icon"
          role="button"
        />
      </Link>
    </header>
  );
};

export default CreateHeader;

const BackButton = styled.img`
  height: 30px;
`;
