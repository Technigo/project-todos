import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #301f48;
  padding: 10px;
  border-radius: 5px;
  color: white
`;

const PlaylistLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 10px;
`;

const Playlist = () => {
  const { name, link } = useSelector((state) => state.playlist);

  return (
    <PlaylistContainer>
      <span>{name}</span>
      <PlaylistLink href={link} target="_blank" rel="noopener noreferrer">
      Get in the zone and conquer your to-do list.
      </PlaylistLink>
    </PlaylistContainer>
  );
};

export default Playlist;
